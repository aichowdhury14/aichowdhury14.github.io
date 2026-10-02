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
  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.62-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.24 13.77 0 9.5 12 0l12 9.5-5.24 4.27A7.5 7.5 0 0 0 12 9.5a7.5 7.5 0 0 0-6.76 4.27ZM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"/></svg>',
    researchgate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 16V8h2.5a2 2 0 0 1 0 4H8m2.5 0 2 4M18 9.5a1.8 1.8 0 0 0-3 1.3v2.4a1.8 1.8 0 0 0 3 1.3V12h-1.4"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/></svg>',
  };

  const pubCount = () => d.publications.reduce((n, cat) => n + cat.items.length, 0);

  function renderProfile() {
    const p = d.profile;
    document.title = `${p.name} — ${p.title}`;
    $("#brand-name").textContent = p.initials;
    $("#brand-full").textContent = p.name;

    const parts = p.name.split(" ");
    const last = parts.pop();
    $("#hero-name").innerHTML = `${parts.join(" ")} <span class="grad">${last}</span>`;
    $("#hero-role").textContent = p.title;
    $("#hero-tagline").textContent = p.tagline;
    $("#hero-location").textContent = p.location;
    $("#footer-name").textContent = p.name;
    $("#footer-year").textContent = new Date().getFullYear();
    $("#footer-note").textContent = `${p.title} · ${p.location}`;
    $("#resume-link").href = p.resumeFile;
    $("#contact-cv").href = p.resumeFile;
    $("#contact-email").href = `mailto:${p.email}`;

    $("#avatar-inner").innerHTML = p.photo
      ? `<img src="${p.photo}" alt="${p.name}">`
      : `<span class="avatar-initials">${p.initials}</span>`;

    const current = d.experience.find((j) => /present/i.test(j.end));
    if (current) {
      $("#hero-current").innerHTML = `<span class="fc-icon">${ICONS.briefcase}</span>
        <span><span class="fc-label">Currently at</span><span class="fc-value">${current.company}</span></span>`;
    }
    $("#hero-pubs").innerHTML = `<span class="fc-num">${pubCount()}</span>
      <span><span class="fc-label">Peer-reviewed</span><span class="fc-value">publications</span></span>`;

    const lastSegment = (url) => new URL(url).pathname.split("/").filter(Boolean).pop();
    const socials = [
      { label: "LinkedIn", href: p.social.linkedin, icon: ICONS.linkedin, value: `/in/${lastSegment(p.social.linkedin)}` },
      { label: "GitHub", href: p.social.github, icon: ICONS.github, value: `@${lastSegment(p.social.github)}` },
      { label: "Google Scholar", href: p.social.scholar, icon: ICONS.scholar, value: "Citation profile" },
      { label: "ResearchGate", href: p.social.researchgate, icon: ICONS.researchgate, value: "Research profile" },
    ];
    const heroSocial = $("#hero-social");
    socials.forEach((s) => {
      const a = el("a", "social-btn", s.icon);
      a.href = s.href;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", s.label);
      a.title = s.label;
      heroSocial.appendChild(a);
    });

    const contactLinks = $("#contact-links");
    [{ label: "Email", value: p.email, href: `mailto:${p.email}`, icon: ICONS.mail }, ...socials].forEach((l) => {
      const a = el(
        "a",
        "contact-link",
        `<span class="contact-icon">${l.icon}</span>
         <span class="contact-text"><span class="contact-label">${l.label}</span><span class="contact-value">${l.value}</span></span>
         <span class="contact-arrow">${ICONS.arrow}</span>`
      );
      a.href = l.href;
      if (!l.href.startsWith("mailto:")) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      contactLinks.appendChild(a);
    });
  }

  /* ---------- Hero proof strip ---------- */
  function renderProof() {
    const stats = [
      { num: "6+", label: "Years in data & AI" },
      { num: `${pubCount()}`, label: "Publications" },
      { num: `${d.certifications.length}`, label: "Certifications" },
      { num: `${d.projects.filter((p) => p.featured).length}`, label: "Live products" },
    ];
    const statRow = $("#stat-row");
    stats.forEach((s) => statRow.appendChild(el("div", "stat", `<div class="stat-num">${s.num}</div><div class="stat-label">${s.label}</div>`)));

    const companies = $("#proof-companies");
    [...new Set(d.experience.map((j) => j.company))].forEach((c) => companies.appendChild(el("span", "proof-company", c)));
  }

  /* ---------- About ---------- */
  function renderAbout() {
    const wrap = $("#about-text");
    d.about.forEach((p) => wrap.appendChild(el("p", "reveal", p)));

    if (d.profile.researchInterests) {
      const tagWrap = $("#research-interests");
      d.profile.researchInterests.forEach((t) => tagWrap.appendChild(el("span", "chip", t)));
    }
  }

  /* ---------- Experience ---------- */
  const VISIBLE_POINTS = 4;
  function renderExperience() {
    const tl = $("#timeline");
    d.experience.forEach((job, i) => {
      const isCurrent = /present/i.test(job.end);
      const extra = job.points.length - VISIBLE_POINTS;
      const item = el(
        "div",
        `timeline-item reveal${isCurrent ? " is-current" : ""}`,
        `
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-head">
            <div>
              <div class="timeline-role">${job.role}</div>
              <div class="timeline-meta"><span class="timeline-company">${job.company}</span><span class="timeline-loc">${job.location}</span></div>
            </div>
            <div class="timeline-date">${isCurrent ? '<span class="now-badge">Current</span>' : ""}${job.start} — ${job.end}</div>
          </div>
          <ul class="timeline-points" id="tl-points-${i}">${job.points
            .map((p, k) => `<li${k >= VISIBLE_POINTS ? " hidden" : ""}>${p}</li>`)
            .join("")}</ul>
          ${extra > 0 ? `<button class="tl-more" type="button" aria-expanded="false" aria-controls="tl-points-${i}">Show ${extra} more</button>` : ""}
        </div>
      `
      );
      const btn = item.querySelector(".tl-more");
      if (btn) {
        btn.addEventListener("click", () => {
          const open = btn.getAttribute("aria-expanded") !== "true";
          item.querySelectorAll(".timeline-points li").forEach((li, k) => {
            if (k >= VISIBLE_POINTS) li.hidden = !open;
          });
          btn.setAttribute("aria-expanded", String(open));
          btn.textContent = open ? "Show less" : `Show ${extra} more`;
        });
      }
      tl.appendChild(item);
    });
  }

  /* ---------- Career & Research Timeline (roles, publications, certifications, honors by year — all real dates already in the data above) ---------- */
  function renderCareerTimeline() {
    const wrap = $("#career-timeline-chart");
    if (!wrap) return;

    const yearOf = (str) => {
      const m = String(str).match(/\d{4}/);
      return m ? parseInt(m[0], 10) : null;
    };
    const currentYear = new Date().getFullYear();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rowIndex = 0;
    const ROW_BASE_STEP = 60;
    const ITEM_STEP = 12;
    const ITEM_STEP_CAP = 80;

    const roles = d.experience
      .map((job) => ({
        label: `${job.role} · ${job.company}`,
        company: job.company,
        start: yearOf(job.start),
        end: job.end.trim().toLowerCase() === "present" ? currentYear : yearOf(job.end),
        endLabel: job.end,
        current: job.end.trim().toLowerCase() === "present",
      }))
      .filter((r) => r.start);

    const bucketByYear = (arr, dateFn, titleFn) => {
      const map = {};
      arr.forEach((item) => {
        const y = yearOf(dateFn(item));
        if (y) (map[y] = map[y] || []).push(titleFn(item));
      });
      return map;
    };
    const pubsByYear = bucketByYear(d.publications.flatMap((g) => g.items), (p) => p.date, (p) => p.title);
    const certsByYear = bucketByYear(d.certifications, (c) => c.date, (c) => c.title);
    const honorsByYear = bucketByYear(d.honors, (h) => h.date, (h) => h.role + " — " + h.org);

    const allYears = [
      ...roles.map((r) => r.start),
      ...roles.map((r) => r.end),
      ...Object.keys(pubsByYear).map(Number),
      ...Object.keys(certsByYear).map(Number),
      ...Object.keys(honorsByYear).map(Number),
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

    const gridlines = el(
      "div",
      "ct-gridlines",
      years.map((y) => `<span class="ct-gridline" style="left:${pct(y)}%"></span>`).join("")
    );
    wrap.appendChild(gridlines);

    function addTooltip(mark, html) {
      mark.appendChild(el("div", "ct-tooltip", html));
    }
    function stagger(elm, itemIndex) {
      if (reduceMotion) return;
      elm.classList.add("ct-animate");
      const delay = rowIndex * ROW_BASE_STEP + Math.min(itemIndex * ITEM_STEP, ITEM_STEP_CAP);
      elm.style.transitionDelay = delay + "ms";
    }

    // Shared crosshair: hovering/focusing any mark or bar shows a vertical guide
    // through every row, so you can see what else was happening that same year.
    const guideLayer = el("div", "ct-guideline-layer", `<div class="ct-guideline"></div>`);
    const guideline = guideLayer.querySelector(".ct-guideline");
    function linkCrosshair(elm, leftPct) {
      const show = () => {
        guideline.style.left = leftPct + "%";
        guideline.classList.add("show");
      };
      const hide = () => guideline.classList.remove("show");
      elm.addEventListener("pointerenter", show);
      elm.addEventListener("pointerleave", hide);
      elm.addEventListener("focus", show);
      elm.addEventListener("blur", hide);
    }

    const rolesRow = el("div", "ct-row", `<div class="ct-row-label">Roles</div><div class="ct-track"></div>`);
    const rolesTrack = rolesRow.querySelector(".ct-track");
    roles.forEach((r, i) => {
      const left = pct(r.start);
      const width = Math.max(pct(r.end) - left, 3);
      const bar = el("div", "ct-bar ct-bar-role", r.current ? `<span class="ct-bar-label">${r.company}</span>` : "");
      bar.style.left = left + "%";
      bar.style.width = width + "%";
      bar.tabIndex = 0;
      addTooltip(bar, `<strong>${r.label}</strong><br>${r.start} — ${r.endLabel}`);
      stagger(bar, i);
      linkCrosshair(bar, left);
      rolesTrack.appendChild(bar);
    });
    wrap.appendChild(rolesRow);
    rowIndex++;

    function buildMarkerRow(label, byYear, markClass) {
      const row = el("div", "ct-row", `<div class="ct-row-label">${label}</div><div class="ct-track"></div>`);
      const track = row.querySelector(".ct-track");
      const entries = Object.keys(byYear).map((y) => [parseInt(y, 10), byYear[y]]);
      entries.forEach(([year, items], i) => {
        const size = Math.min(16 + items.length * 2.5, 34);
        const mark = el("div", `ct-mark ${markClass}`, `<span>${items.length}</span>`);
        const left = pct(year);
        mark.style.left = left + "%";
        mark.style.width = size + "px";
        mark.style.height = size + "px";
        mark.tabIndex = 0;
        addTooltip(mark, `<strong>${year} (${items.length}):</strong> ${items.join(", ")}`);
        stagger(mark, i);
        linkCrosshair(mark, left);
        track.appendChild(mark);
      });
      wrap.appendChild(row);
      rowIndex++;
    }
    buildMarkerRow("Publications", pubsByYear, "ct-mark-pub");
    buildMarkerRow("Certifications", certsByYear, "ct-mark-cert");
    buildMarkerRow("Honors", honorsByYear, "ct-mark-honor");
    wrap.appendChild(guideLayer);

    if (!reduceMotion) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("ct-in");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );
      obs.observe(wrap);
    }
  }

  /* ---------- Projects ---------- */
  const PROJECT_FILTERS = [
    ["all", "All"],
    ["personal", "Personal Projects"],
    ["banking", "Banking & Fintech"],
    ["research", "Research & Analytics"],
  ];
  const projectCategory = (p) =>
    p.tag.startsWith("Personal Project") ? "personal" : p.tag.startsWith("Banking") ? "banking" : "research";

  function projectCard(p) {
    const body = (meta) => `
      <div class="project-card-body">
        ${meta}
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.description}</div>
        <div class="chip-row">${p.stack.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
        ${p.link ? `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel || "Read the paper"} →</a>` : ""}
      </div>`;

    if (p.featured) {
      return el(
        "article",
        "card card-featured reveal",
        `
        <a class="browser-frame" href="${p.link}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
          <div class="browser-bar"><i></i><i></i><i></i><span class="browser-url">${new URL(p.link).host}</span></div>
          <img src="${p.image}" alt="" loading="lazy">
        </a>
        ${body(`<div class="project-meta"><span class="project-tag">${p.tag}</span><span class="live-badge">Live</span></div>`)}
      `
      );
    }
    return el(
      "article",
      p.image ? "card card-media reveal" : "card reveal",
      `${p.image ? `<img class="project-image" src="${p.image}" alt="${p.title} illustration" loading="lazy">` : ""}
      ${body(`<span class="project-tag">${p.tag}</span>`)}`
    );
  }

  function renderProjects() {
    const grid = $("#project-grid");
    const featured = $("#project-featured");
    const filters = $("#project-filters");
    const cards = d.projects.map((p) => {
      const card = projectCard(p);
      card.dataset.cat = projectCategory(p);
      (p.featured ? featured : grid).appendChild(card);
      return card;
    });

    PROJECT_FILTERS.forEach(([key, label]) => {
      const count = key === "all" ? cards.length : cards.filter((c) => c.dataset.cat === key).length;
      if (!count) return;
      const btn = el("button", "filter-btn", `${label}<span class="filter-count">${count}</span>`);
      btn.type = "button";
      btn.setAttribute("aria-pressed", key === "all");
      btn.addEventListener("click", () => {
        filters.querySelectorAll(".filter-btn").forEach((b) => b.setAttribute("aria-pressed", b === btn));
        cards.forEach((c) => {
          c.hidden = key !== "all" && c.dataset.cat !== key;
          c.classList.add("in");
        });
        featured.hidden = ![...featured.children].some((c) => !c.hidden);
        grid.hidden = ![...grid.children].some((c) => !c.hidden);
      });
      filters.appendChild(btn);
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
    const total = d.skills.reduce((n, s) => n + s.items.length, 0);
    $("#skills-sub").textContent = `${d.skills.length} areas, ${total} tools and technologies — from classical ML to production data platforms.`;
    d.skills.forEach((s) => {
      const icon = SKILL_ICONS[s.category] || "";
      const card = el(
        "div",
        "card skill-card reveal",
        `<div class="skill-card-head">
           <span class="skill-card-icon">${icon}</span>
           <span class="skill-card-title">${s.category}</span>
           <span class="skill-count" aria-label="${s.items.length} tools">${s.items.length}</span>
         </div>
         <div class="skill-tags">${s.items.map((i) => `<span class="skill-tag">${i}</span>`).join("")}</div>`
      );
      grid.appendChild(card);
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
      wrap.appendChild(el("h3", "pub-group-title reveal", `${group.category}<span class="pub-count">${group.items.length}</span>`));
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
      btn.innerHTML = current === "dark" ? ICONS.sun : ICONS.moon;
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

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderProfile();
    renderProof();
    renderAbout();
    renderExperience();
    renderCareerTimeline();
    renderProjects();
    renderSkills();
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
  });
})();
