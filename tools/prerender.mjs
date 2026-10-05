// Bakes the JS-rendered page into index.html so crawlers that don't run JavaScript
// (some search engines, AI answer engines) see the full content.
// The live page still re-renders from data.js on load. Run after editing data.js:
//   npm install   (once)
//   npm run prerender
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { chromium } from "playwright";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = join(root, "index.html");
const START = "<!-- prerender:start -->";
const END = "<!-- prerender:end -->";

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(pathToFileURL(indexPath).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(2500); // let count-up stats finish

const rendered = await page.evaluate(([start, end]) => {
  // Drop transient runtime state so the snapshot is stable between runs.
  document.querySelectorAll(".in, .active, .scrolled, .show, .ct-in").forEach((n) =>
    n.classList.remove("in", "active", "scrolled", "show", "ct-in")
  );
  document.querySelectorAll("[style*='transition-delay']").forEach((n) => n.style.removeProperty("transition-delay"));
  document.querySelectorAll("[data-live]").forEach((n) => (n.textContent = n.dataset.live));
  document.querySelectorAll("[class='']").forEach((n) => n.removeAttribute("class"));
  document.querySelectorAll("[style='']").forEach((n) => n.removeAttribute("style"));
  const html = document.body.innerHTML;
  return html.slice(html.indexOf(start) + start.length, html.indexOf(end));
}, [START, END]);
await browser.close();

const source = await readFile(indexPath, "utf8");
const a = source.indexOf(START);
const b = source.indexOf(END);
if (a < 0 || b < 0) throw new Error("prerender markers missing from index.html");
await writeFile(indexPath, source.slice(0, a + START.length) + rendered + source.slice(b), "utf8");
console.log(`index.html prerendered (${rendered.length.toLocaleString()} chars)`);
