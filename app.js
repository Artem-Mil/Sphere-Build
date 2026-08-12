/* Renders the page from CONTENT (content.js).
   You normally do not need to edit this file. */

(function () {
  const C = CONTENT;
  const esc = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Turn bare URLs in a text line into links.
  const linkify = (s) =>
    esc(s).replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener">$1</a>'
    );

  const stripe = '<span class="tick stripe" aria-hidden="true"></span>';
  const secHead = (title) =>
    `<div class="sec-head">${stripe}<h2>${esc(title)}</h2></div>`;

  /* ---------- hero ---------- */
  document.title = `${C.meta.campName} — ${C.meta.title}`;
  document.getElementById("hero-eyebrow").textContent = C.meta.subtitle;
  document.getElementById("hero-title").innerHTML =
    `${esc(C.meta.campName)} <span class="accent">${esc(C.meta.title)}</span>`;
  document.getElementById("hero-line").textContent = C.meta.heroLine;
  document.getElementById("updated").textContent =
    `Last updated ${C.meta.lastUpdated}`;
  document.getElementById("foot-line").textContent =
    `${C.meta.campName} · ${C.meta.subtitle}`;

  document.getElementById("pinned").innerHTML = C.meta.pinned
    .map((p) => {
      const isCode = /code/i.test(p.label);
      return `<div class="pinned-card">
        <span class="k">${esc(p.label)}</span>
        <span class="v${isCode ? " code" : ""}">${esc(p.value)}</span>
      </div>`;
    })
    .join("");

  /* ---------- nav ---------- */
  const sections = [
    ["overview", "The Build"],
    ["schedule", "Schedule"],
    ["camp", "Camp Structures"],
    ["playa", "Playa Art"],
    ["emergency", "Emergency"],
    ["showers", "Showers"],
    ["packing", "Bring"],
    ["crew", "Crew"],
  ];
  document.getElementById("nav").innerHTML = sections
    .map(([id, label]) => `<a href="#${id}" data-id="${id}">${esc(label)}</a>`)
    .join("");

  /* ---------- section builders ---------- */
  const parts = [];

  // Overview
  parts.push(`<section id="overview">
    ${secHead(C.overview.heading)}
    <p class="sec-intro">${esc(C.overview.intro)}</p>
    <div class="build-grid">
      ${C.overview.items
        .map(
          (i) => `<div class="build-item">
            <span class="name">${esc(i.name)}</span>
            <span class="detail">${esc(i.detail)}</span>
          </div>`
        )
        .join("")}
    </div>
  </section>`);

  // Schedule
  parts.push(`<section id="schedule">
    ${secHead(C.schedule.heading)}
    <p class="sched-note">${esc(C.schedule.note)}</p>
    ${C.schedule.days
      .map(
        (d) => `<div class="day">
          <div class="day-chip"><span class="d">${esc(d.day)}</span><span class="dt">${esc(d.date)}</span></div>
          <div class="day-body">
            <h3>${esc(d.title)}</h3>
            <ul>${d.items.map((i) => `<li>${linkify(i)}</li>`).join("")}</ul>
          </div>
        </div>`
      )
      .join("")}
  </section>`);

  // Camp structures
  const structCard = (s) => `<div class="struct">
    <h3>${esc(s.name)}</h3>
    ${
      s.image
        ? `<figure><img src="${esc(s.image)}" alt="${esc(s.imageCaption || s.name)}" loading="lazy">
           ${s.imageCaption ? `<figcaption>${esc(s.imageCaption)}</figcaption>` : ""}</figure>`
        : ""
    }
    <ul>${s.points.map((p) => `<li>${linkify(p)}</li>`).join("")}</ul>
  </div>`;

  parts.push(`<section id="camp">
    ${secHead(C.campBuild.heading)}
    ${C.campBuild.sections.map(structCard).join("")}
  </section>`);

  // Playa art
  parts.push(`<section id="playa">
    ${secHead(C.playaArt.heading)}
    <div class="art">
      <p class="sec-intro">${esc(C.playaArt.intro)}</p>
      <figure class="art-figure">
        <img src="${esc(C.playaArt.heroImage)}" alt="${esc(C.playaArt.heroCaption)}" loading="lazy">
        <figcaption>${esc(C.playaArt.heroCaption)}</figcaption>
      </figure>
      <div class="gallery">
        ${C.playaArt.gallery
          .map(
            (g) => `<figure><img src="${esc(g.image)}" alt="${esc(g.caption)}" loading="lazy">
              <figcaption>${esc(g.caption)}</figcaption></figure>`
          )
          .join("")}
      </div>
      ${C.playaArt.blocks.map(structCard).join("")}
    </div>
  </section>`);

  // Emergency
  const rules = (list) =>
    list
      .map(
        (r) => `<div class="rule ${esc(r.level)}">
          <div class="trigger">${esc(r.trigger)}</div>
          <ul>${r.actions.map((a) => `<li>${linkify(a)}</li>`).join("")}</ul>
        </div>`
      )
      .join("");

  parts.push(`<section id="emergency">
    ${secHead(C.emergency.heading)}
    <p class="sec-intro">${linkify(C.emergency.intro)}</p>
    <div class="proto">
      <h3>${esc(C.emergency.art.name)}</h3>
      <p class="proto-tagline">${esc(C.emergency.art.tagline)}</p>
      ${rules(C.emergency.art.rules)}
      <h3>${esc(C.emergency.camp.name)}</h3>
      ${rules(C.emergency.camp.rules)}
    </div>
  </section>`);

  // Showers
  parts.push(`<section id="showers">
    ${secHead(C.showers.heading)}
    <p class="sec-intro">${esc(C.showers.intro)}</p>
    <div class="facts">
      ${C.showers.facts
        .map(
          (f) => `<div class="fact"><span class="k">${esc(f.label)}</span>${esc(f.value)}</div>`
        )
        .join("")}
    </div>
  </section>`);

  // Packing
  parts.push(`<section id="packing">
    ${secHead(C.packing.heading)}
    <p class="sec-intro">${esc(C.packing.intro)}</p>
    <div class="pack-grid">
      ${C.packing.groups
        .map(
          (g) => `<div class="pack">
            <h3>${esc(g.name)}</h3>
            <ul>${g.items.map((i) => `<li>${linkify(i)}</li>`).join("")}</ul>
          </div>`
        )
        .join("")}
    </div>
    <div class="internet-note">${esc(C.packing.internet)}</div>
  </section>`);

  // Crew
  const person = (p, lead) =>
    `<div class="person${lead ? " lead" : ""}">
      <span class="name">${esc(p.name)}</span>
      <span class="role">${esc(p.role)}</span>
    </div>`;

  parts.push(`<section id="crew">
    ${secHead(C.crew.heading)}
    <div class="crew-grid">
      ${C.crew.leads.map((p) => person(p, true)).join("")}
      ${C.crew.members.map((p) => person(p, false)).join("")}
    </div>
    <ul class="crew-notes">
      ${C.crew.notes.map((n) => `<li>${linkify(n)}</li>`).join("")}
    </ul>
  </section>`);

  document.getElementById("main").innerHTML = parts.join("");

  /* ---------- nav highlight on scroll ---------- */
  const links = Array.from(document.querySelectorAll(".tabs a"));
  const secEls = sections
    .map(([id]) => document.getElementById(id))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((l) => l.classList.toggle("active", l.dataset.id === id));
  };

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    secEls.forEach((s) => obs.observe(s));
  }
})();
