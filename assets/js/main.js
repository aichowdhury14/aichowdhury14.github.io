/* ============================================================
   Renders PORTFOLIO_DATA (from data.js) into the page,
   then wires up nav, theme toggle, and scroll interactions.
   ============================================================ */

(function () {
  const d = PORTFOLIO_DATA;
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };

  /* ---------- Profile / hero / footer / nav brand ---------- */
  function renderProfile() {
    document.title = `${d.profile.name} — ${d.profile.title}`;
    $("#brand-name").textContent = d.profile.initials;
    $("#hero-name").innerHTML = `Hi, I'm <span class="grad">${d.profile.name}</span>`;
    $("#hero-tagline").textContent = d.profile.tagline;
    $("#hero-location").textContent = d.profile.location;
    $("#footer-name").textContent = d.profile.name;
    $("#footer-year").textContent = new Date().getFullYear();

    const resumeBtn = $("#resume-link");
    resumeBtn.href = d.profile.resumeFile;

    const avatarInner = $("#avatar-inner");
    if (d.profile.photo) {
      avatarInner.innerHTML = `<img src="${d.profile.photo}" alt="${d.profile.name}">`;
    } else {
      avatarInner.innerHTML = `<span class="avatar-initials">${d.profile.initials}</span>`;
    }

    const contactLinks = $("#contact-links");
    const links = [
      { label: d.profile.email, href: `mailto:${d.profile.email}`, icon: "✉" },
      { label: "LinkedIn", href: d.profile.social.linkedin, icon: "in" },
      { label: "GitHub", href: d.profile.social.github, icon: "◆" },
      { label: "Google Scholar", href: d.profile.social.scholar, icon: "🎓" },
      { label: "ResearchGate", href: d.profile.social.researchgate, icon: "◈" },
    ];
    links.forEach((l) => {
      const a = el("a", "contact-link", `<span>${l.icon}</span><span>${l.label}</span>`);
      a.href = l.href;
      a.target = "_blank";
      a.rel = "noopener";
      contactLinks.appendChild(a);
    });
  }

  /* ---------- Core stats (shared by hero metrics strip + About stat row) ---------- */
  function computeStats() {
    const pubCount = d.publications.reduce((n, cat) => n + cat.items.length, 0);
    return [
      { num: `${d.experience.length}+`, label: "Roles across banking, fintech & research" },
      { num: `${pubCount}`, label: "Published research papers" },
      { num: `${d.certifications.length}`, label: "Professional certifications" },
      { num: "8+", label: "Years in applied research" },
    ];
  }

  /* ---------- About ---------- */
  function renderAbout() {
    const wrap = $("#about-text");
    d.about.forEach((p) => wrap.appendChild(el("p", "reveal", p)));

    const statRow = $("#stat-row");
    computeStats().forEach((s) => {
      statRow.appendChild(el("div", "stat reveal", `<div class="stat-num">${s.num}</div><div class="stat-label">${s.label}</div>`));
    });

    if (d.profile.researchInterests) {
      const tagWrap = $("#research-interests");
      d.profile.researchInterests.forEach((t) => tagWrap.appendChild(el("span", "chip reveal", t)));
    }
  }

  /* ---------- Experience ---------- */
  function renderExperience() {
    const tl = $("#timeline");
    d.experience.forEach((job) => {
      const item = el(
        "div",
        "timeline-item reveal",
        `
        <div class="timeline-dot"></div>
        <div class="timeline-head">
          <div><span class="timeline-role">${job.role}</span> · <span class="timeline-company">${job.company}</span></div>
          <div class="timeline-date">${job.start} — ${job.end}</div>
        </div>
        <div class="timeline-loc">${job.location}</div>
        <ul class="timeline-points">${job.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      `
      );
      tl.appendChild(item);
    });
  }

  /* ---------- Career & Research Timeline (roles, publications, certifications by year — all real dates already in the data above) ---------- */
  function renderCareerTimeline() {
    const wrap = $("#career-timeline-chart");
    if (!wrap) return;

    const yearOf = (str) => {
      const m = String(str).match(/\d{4}/);
      return m ? parseInt(m[0], 10) : null;
    };
    const currentYear = new Date().getFullYear();

    const roles = d.experience
      .map((job) => ({
        label: `${job.role} · ${job.company}`,
        start: yearOf(job.start),
        end: job.end.trim().toLowerCase() === "present" ? currentYear : yearOf(job.end),
        endLabel: job.end,
      }))
      .filter((r) => r.start);

    const pubsByYear = {};
    d.publications.flatMap((g) => g.items).forEach((p) => {
      const y = yearOf(p.date);
      if (y) (pubsByYear[y] = pubsByYear[y] || []).push(p.title);
    });

    const certsByYear = {};
    d.certifications.forEach((c) => {
      const y = yearOf(c.date);
      if (y) (certsByYear[y] = certsByYear[y] || []).push(c.title);
    });

    const allYears = [
      ...roles.map((r) => r.start),
      ...roles.map((r) => r.end),
      ...Object.keys(pubsByYear).map(Number),
      ...Object.keys(certsByYear).map(Number),
    ];
    const minYear = Math.min(...allYears);
    const maxYear = Math.max(...allYears, currentYear);
    const span = maxYear - minYear || 1;
    const pct = (year) => ((year - minYear) / span) * 100;

    const years = [];
    for (let y = minYear; y <= maxYear; y++) years.push(y);

    const axis = el(
      "div",
      "ct-axis",
      years.map((y) => `<span class="ct-axis-year" style="left:${pct(y)}%">${y}</span>`).join("")
    );
    wrap.appendChild(axis);

    function addTooltip(mark, html) {
      const tip = el("div", "ct-tooltip", html);
      mark.appendChild(tip);
    }

    const rolesRow = el("div", "ct-row", `<div class="ct-row-label">Roles</div><div class="ct-track"></div>`);
    const rolesTrack = rolesRow.querySelector(".ct-track");
    roles.forEach((r) => {
      const left = pct(r.start);
      const width = Math.max(pct(r.end) - left, 3);
      const bar = el("div", "ct-bar ct-bar-role", "");
      bar.style.left = left + "%";
      bar.style.width = width + "%";
      bar.tabIndex = 0;
      addTooltip(bar, `<strong>${r.label}</strong><br>${r.start} — ${r.endLabel}`);
      rolesTrack.appendChild(bar);
    });
    wrap.appendChild(rolesRow);

    function buildMarkerRow(label, byYear, markClass) {
      const row = el("div", "ct-row", `<div class="ct-row-label">${label}</div><div class="ct-track"></div>`);
      const track = row.querySelector(".ct-track");
      Object.keys(byYear).forEach((yearStr) => {
        const year = parseInt(yearStr, 10);
        const items = byYear[yearStr];
        const size = Math.min(16 + items.length * 2.5, 34);
        const mark = el("div", `ct-mark ${markClass}`, `<span>${items.length}</span>`);
        mark.style.left = pct(year) + "%";
        mark.style.width = size + "px";
        mark.style.height = size + "px";
        mark.tabIndex = 0;
        addTooltip(mark, `<strong>${year} (${items.length}):</strong> ${items.join(", ")}`);
        track.appendChild(mark);
      });
      wrap.appendChild(row);
    }
    buildMarkerRow("Publications", pubsByYear, "ct-mark-pub");
    buildMarkerRow("Certifications", certsByYear, "ct-mark-cert");
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    const grid = $("#project-grid");
    d.projects.forEach((p) => {
      const card = el(
        "div",
        p.image ? "card card-media reveal" : "card reveal",
        `
        ${p.image ? `<img class="project-image" src="${p.image}" alt="${p.title} screenshot" loading="lazy">` : ""}
        <div class="project-card-body">
          <span class="project-tag">${p.tag}</span>
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.description}</div>
          <div class="chip-row">${p.stack.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
          ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel || "Read the paper"} →</a>` : ""}
        </div>
      `
      );
      grid.appendChild(card);
    });
  }

  /* ---------- Skills ---------- */
  const SKILL_ICONS = {
    Programming: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5 3 12l5 7M16 5l5 7-5 7M13 4l-2 16"/></svg>',
    "Machine Learning": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6.8 10.3 11M7 17.2 10.3 13M13.7 11 17 6.8M13.7 13 17 17.2"/></svg>',
    "Deep Learning & AI": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2"/></svg>',
    "Data Science": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    Databases: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
    "Data Migration": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h13l-3-3M20 17H7l3 3"/></svg>',
    "Visualization & BI": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 21H4a1 1 0 0 1-1-1V3"/><path d="M7 15l3.5-4.5 3 3L19 6"/></svg>',
    Reporting: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z"/><path d="M14 3v5h5M8 13h8M8 17h5"/></svg>',
    Web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z"/></svg>',
    "MLOps & Deployment": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v11M7 9l5-5 5 5"/><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg>',
    Tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z"/></svg>',
  };

  function renderSkills() {
    const grid = $("#skills-grid");
    d.skills.forEach((s) => {
      const icon = SKILL_ICONS[s.category] || "";
      const card = el(
        "div",
        "card reveal",
        `<div class="skill-card-head">
           <span class="skill-card-icon">${icon}</span>
           <span class="skill-card-title">${s.category}</span>
         </div>
         <div class="skill-tags">${s.items.map((i) => `<span class="skill-tag">${i}</span>`).join("")}</div>`
      );
      grid.appendChild(card);
    });
  }

  /* ---------- Skill chart: tool count per category (single-hue magnitude bars) ---------- */
  function renderSkillChart() {
    const wrap = $("#skill-chart-wrap");
    const tableBody = $("#skill-chart-table-body");
    const toggle = $("#skill-chart-toggle");
    const table = $("#skill-chart-table");
    if (!wrap || !tableBody || !toggle) return;

    const maxCount = Math.max(...d.skills.map((s) => s.items.length));

    d.skills.forEach((s) => {
      const pct = (s.items.length / maxCount) * 100;
      const row = document.createElement("div");
      row.className = "chart-row";
      row.tabIndex = 0;

      const label = document.createElement("div");
      label.className = "chart-row-label";
      label.textContent = s.category;

      const track = document.createElement("div");
      track.className = "chart-row-track";
      const fill = document.createElement("div");
      fill.className = "chart-row-fill";
      fill.style.width = pct + "%";
      track.appendChild(fill);

      const value = document.createElement("div");
      value.className = "chart-row-value";
      value.textContent = String(s.items.length);

      const tooltip = document.createElement("div");
      tooltip.className = "chart-tooltip";
      const strong = document.createElement("strong");
      strong.textContent = `${s.category} (${s.items.length}): `;
      tooltip.appendChild(strong);
      tooltip.appendChild(document.createTextNode(s.items.join(", ")));
      track.appendChild(tooltip);

      row.appendChild(label);
      row.appendChild(track);
      row.appendChild(value);
      wrap.appendChild(row);

      const tr = document.createElement("tr");
      const tdCat = document.createElement("td");
      tdCat.textContent = s.category;
      const tdCount = document.createElement("td");
      tdCount.textContent = String(s.items.length);
      const tdList = document.createElement("td");
      tdList.textContent = s.items.join(", ");
      tr.appendChild(tdCat);
      tr.appendChild(tdCount);
      tr.appendChild(tdList);
      tableBody.appendChild(tr);
    });

    toggle.addEventListener("click", () => {
      const showingTable = !table.hidden;
      table.hidden = showingTable;
      wrap.hidden = !showingTable;
      toggle.textContent = showingTable ? "View as table" : "View as chart";
      toggle.setAttribute("aria-pressed", String(!showingTable));
    });
  }

  /* ---------- Published book ---------- */
  function renderBook() {
    const wrap = $("#book-highlight");
    if (!wrap || !d.book) return;
    const b = d.book;
    const stars = "★".repeat(b.rating) + "☆".repeat(5 - b.rating);
    const card = el(
      "a",
      "book-card reveal",
      `
      <img class="book-cover" src="${b.cover}" alt="${b.titleEn} — book cover">
      <div class="book-body">
        <span class="book-label">Published Book</span>
        <div class="book-title-bn">${b.title}</div>
        <div class="book-title-en">${b.titleEn}</div>
        <p class="book-desc">${b.description}</p>
        <div class="book-meta">
          <span class="book-stars">${stars}</span>
          <span class="book-rating-count">${b.rating.toFixed(1)} · ${b.ratingCount} ratings</span>
        </div>
      </div>
      <span class="book-cta">Get the eBook →</span>
      `
    );
    card.href = b.link;
    card.target = "_blank";
    card.rel = "noopener";
    wrap.appendChild(card);
  }

  /* ---------- Publications (grouped by category) ---------- */
  function renderPublications() {
    const wrap = $("#publications-list");
    d.publications.forEach((group) => {
      wrap.appendChild(el("h3", "pub-group-title reveal", group.category));
      group.items.forEach((p) => {
        const item = el(
          "a",
          "list-item reveal",
          `
          <div>
            <div class="list-item-title">${p.title}</div>
            <div class="list-item-sub">${p.venue}</div>
          </div>
          <div style="text-align:right; display:flex; flex-direction:column; gap:6px; align-items:flex-end;">
            <span class="list-item-date">${p.date}</span>
            <span class="list-item-link">View →</span>
          </div>
        `
        );
        item.href = p.link;
        item.target = "_blank";
        item.rel = "noopener";
        wrap.appendChild(item);
      });
    });
  }

  /* ---------- Certificate badge gallery (auto-hides missing images) ---------- */
  function renderCertificateGallery() {
    const section = $("#cert-gallery");
    const wrap = $("#cert-gallery-grid");
    if (!section || !wrap || !d.certificateGallery) return;

    let loadedCount = 0;
    let settledCount = 0;
    const total = d.certificateGallery.length;

    d.certificateGallery.forEach((c) => {
      const fig = el(
        "figure",
        "cert-badge reveal",
        `<img src="${c.image}" alt="${c.label}" loading="lazy"><figcaption>${c.label}</figcaption>`
      );
      fig.style.display = "none";
      const img = fig.querySelector("img");
      img.addEventListener("load", () => {
        fig.style.display = "";
        loadedCount++;
        settle();
      });
      img.addEventListener("error", () => {
        fig.remove();
        settle();
      });
      wrap.appendChild(fig);
    });

    function settle() {
      settledCount++;
      if (settledCount === total) section.style.display = loadedCount === 0 ? "none" : "";
    }
  }

  /* ---------- Academic & additional projects ---------- */
  function renderAcademicProjects() {
    const wrap = $("#academic-projects-grid");
    if (!wrap || !d.academicProjects) return;
    d.academicProjects.forEach((p) => {
      wrap.appendChild(
        el(
          "div",
          p.image ? "mini-project mini-project-media reveal" : "mini-project reveal",
          `
          ${p.image ? `<img class="mini-project-image" src="${p.image}" alt="${p.title} illustration" loading="lazy">` : ""}
          <div class="mini-project-body">
            <div class="mini-project-title">${p.title}</div>
            <div class="chip-row">${p.stack.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
          </div>
          `
        )
      );
    });
  }

  /* ---------- Certifications ---------- */
  function renderCertifications() {
    const wrap = $("#certifications-list");
    d.certifications.forEach((c) => {
      const isLocalPdf = !c.link.startsWith("http");
      const item = el(
        "a",
        "list-item reveal",
        `
        <div>
          <div class="list-item-title">${c.title}</div>
          <div class="list-item-sub">${c.issuer}</div>
        </div>
        <div style="text-align:right; display:flex; flex-direction:column; gap:6px; align-items:flex-end;">
          <span class="list-item-date">${c.date}</span>
          <span class="list-item-link">${isLocalPdf ? "View PDF →" : "Verify →"}</span>
        </div>
      `
      );
      item.href = c.link;
      item.target = "_blank";
      item.rel = "noopener";
      wrap.appendChild(item);
    });
  }

  /* ---------- Education & Honors ---------- */
  function renderEduHonors() {
    const eduWrap = $("#education-list");
    d.education.forEach((e) => {
      eduWrap.appendChild(
        el(
          "div",
          "mini-item reveal",
          `<div class="mini-item-title">${e.degree}</div>
           <div class="mini-item-org">${e.school}</div>
           <div class="mini-item-meta">${e.date}</div>
           ${e.detail ? `<div class="mini-item-detail">${e.detail}</div>` : ""}`
        )
      );
    });

    const honorsWrap = $("#honors-list");
    d.honors.forEach((h) => {
      honorsWrap.appendChild(
        el(
          "div",
          "mini-item reveal",
          `<div class="mini-item-title">${h.role}</div>
           <div class="mini-item-org">${h.org}</div>
           <div class="mini-item-meta">${h.date} · ${h.location}</div>`
        )
      );
    });
  }

  /* ---------- Nav / theme / interactions ---------- */
  function setupNav() {
    const nav = $("#nav");
    const toggle = $("#nav-toggle");
    const links = $("#nav-links");
    const backdrop = $("#nav-backdrop");

    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 8);
      toTopBtn.classList.toggle("show", window.scrollY > 500);
    });

    function closeMenu() {
      links.classList.remove("open");
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
    function toggleMenu() {
      const isOpen = links.classList.toggle("open");
      backdrop.classList.toggle("open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    toggle.addEventListener("click", toggleMenu);
    backdrop.addEventListener("click", closeMenu);
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

    const sections = document.querySelectorAll("main section[id]");
    const navAnchors = document.querySelectorAll(".nav-links a");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    const toTopBtn = $("#to-top");
    toTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function setupTheme() {
    const btn = $("#theme-toggle");
    const stored = localStorage.getItem("theme");
    if (stored) document.documentElement.setAttribute("data-theme", stored);
    updateIcon();

    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateIcon();
    });

    function updateIcon() {
      const current = document.documentElement.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      btn.textContent = current === "dark" ? "☀" : "☾";
    }
  }

  function setupCountUp() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    function animate(target, num, suffix, duration) {
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        target.textContent = Math.round(eased * num) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else target.textContent = num + suffix;
      }
      requestAnimationFrame(tick);
    }

    const nums = document.querySelectorAll(".stat-num");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          animate(el, target, el.dataset.suffix, 1200);
          obs.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    nums.forEach((el) => {
      const match = el.textContent.trim().match(/^(\d+)(.*)$/);
      if (match) {
        el.dataset.target = match[1];
        el.dataset.suffix = match[2];
        el.textContent = "0" + match[2];
        obs.observe(el);
      }
    });
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((i) => obs.observe(i));
  }

  function setupTyping() {
    const el = $("#hero-role-typed");
    if (!el) return;
    const roles = [d.profile.title, "Building Production ML Systems", "Fraud & Risk Modeling", "Generative AI / LLMs"];
    let ri = 0, ci = 0, deleting = false;

    function tick() {
      const full = roles[ri];
      el.textContent = deleting ? full.slice(0, ci--) : full.slice(0, ci++);
      let delay = deleting ? 28 : 45;

      if (!deleting && ci > full.length) { deleting = true; delay = 1400; }
      else if (deleting && ci < 0) { deleting = false; ri = (ri + 1) % roles.length; ci = 0; delay = 300; }

      setTimeout(tick, delay);
    }
    tick();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderProfile();
    renderAbout();
    renderExperience();
    renderCareerTimeline();
    renderProjects();
    renderSkills();
    renderSkillChart();
    renderAcademicProjects();
    renderCertificateGallery();
    renderBook();
    renderPublications();
    renderCertifications();
    renderEduHonors();
    setupNav();
    setupTheme();
    setupReveal();
    setupCountUp();
    setupTyping();
  });
})();
