/* =========================================================
   Commercial Portfolio Site
   Content is controlled by data/projects.js
========================================================= */

(function () {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const worksGrid = document.getElementById("worksGrid");
  const projectRoot = document.getElementById("projectRoot");
  const sidebar = document.querySelector(".sidebar");
  const menuToggle = document.querySelector(".menu-toggle");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("is-open");
    });
  }

  function escapeHTML(str) {
    return String(str || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function projectURL(slug) {
    return "project.html?slug=" + encodeURIComponent(slug);
  }

  function renderHome(filter = "all") {
    if (!worksGrid) return;

    const filtered = filter === "all"
      ? projects
      : projects.filter(project => project.category === filter);

    worksGrid.innerHTML = filtered.map(project => `
      <a class="work-card fade-in" href="${projectURL(project.slug)}" data-category="${escapeHTML(project.category)}">
        <figure class="work-cover">
          <img src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.title)}" loading="lazy">
        </figure>
        <h2>${escapeHTML(project.title)}｜${escapeHTML(project.subtitle)}</h2>
        <p class="meta">${escapeHTML(project.year)}・${escapeHTML(project.service)}</p>
      </a>
    `).join("");

    if (!filtered.length) {
      worksGrid.innerHTML = `<p class="empty">目前沒有這個分類的作品。</p>`;
    }

    revealOnScroll();
  }

  function setFilterButtons() {
    const buttons = document.querySelectorAll("[data-filter]");
    const initialFilter = getParam("filter") || "all";

    buttons.forEach(button => {
      button.classList.toggle("active", button.dataset.filter === initialFilter);
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        buttons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        renderHome(filter);
        if (sidebar) sidebar.classList.remove("is-open");
      });
    });

    renderHome(initialFilter);
  }

  function renderBlock(block) {
    switch (block.type) {
      case "image":
        return `
          <section class="project-block image-block fade-in">
            <img src="${escapeHTML(block.src)}" alt="${escapeHTML(block.alt || "")}" loading="lazy">
          </section>
        `;

      case "gallery":
        return `
          <section class="project-block gallery-block fade-in">
            ${(block.images || []).map(img => `
              <img src="${escapeHTML(img.src)}" alt="${escapeHTML(img.alt || "")}" loading="lazy">
            `).join("")}
          </section>
        `;

      case "text":
        return `
          <section class="project-block text-block fade-in">
            <h2>${escapeHTML(block.title)}</h2>
            <p>${escapeHTML(block.text)}</p>
          </section>
        `;

      case "circles":
        return `
          <section class="project-block circle-block fade-in">
            ${(block.items || []).map(item => `<div class="circle">${escapeHTML(item)}</div>`).join("")}
          </section>
        `;

      case "columns":
        return `
          <section class="project-block columns-block fade-in">
            ${(block.columns || []).map(col => `
              <article>
                <div>
                  <strong>${escapeHTML(col.title)}</strong>
                  <span>${escapeHTML(col.text)}</span>
                </div>
              </article>
            `).join("")}
          </section>
        `;

      case "spec":
        return `
          <section class="project-block spec-block fade-in">
            <h2>${escapeHTML(block.title)}</h2>
            <div class="spec-grid">
              ${(block.items || []).map(item => `<div>${escapeHTML(item)}</div>`).join("")}
            </div>
          </section>
        `;

      case "pattern":
        return `
          <section class="project-block pattern-block fade-in">
            ${escapeHTML(block.title)}
          </section>
        `;

      case "twoText":
        return `
          <section class="project-block two-text-block fade-in">
            <article>
              <h2>${escapeHTML(block.leftTitle)}</h2>
              <p>${escapeHTML(block.leftText)}</p>
            </article>
            <article>
              <h2>${escapeHTML(block.rightTitle)}</h2>
              <p>${escapeHTML(block.rightText)}</p>
            </article>
          </section>
        `;

      case "video":
        return `
          <section class="project-block video-block fade-in">
            ${block.embed ? block.embed : `<video src="${escapeHTML(block.src)}" controls></video>`}
          </section>
        `;

      case "credit":
        return `
          <section class="credit-block fade-in">
            ${(block.items || []).map(item => `<p>${escapeHTML(item)}</p>`).join("")}
          </section>
        `;

      default:
        return "";
    }
  }

  function renderProject() {
    if (!projectRoot) return;

    const slug = getParam("slug") || projects[0]?.slug;
    const project = projects.find(item => item.slug === slug) || projects[0];

    if (!project) {
      projectRoot.innerHTML = `<p class="empty">找不到作品資料。</p>`;
      return;
    }

    document.title = `${project.title}｜作品內頁`;

    const related = projects
      .filter(item => item.slug !== project.slug)
      .slice(0, 3);

    projectRoot.innerHTML = `
      <section class="project-hero fade-in">
        <img src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.title)}">
      </section>

      <section class="project-intro fade-in">
        <h1>${escapeHTML(project.title)}</h1>
        <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
        <div class="project-meta">
          <span>Client｜${escapeHTML(project.client)}</span>
          <span>Year｜${escapeHTML(project.year)}</span>
          <span>Service｜${escapeHTML(project.service)}</span>
        </div>
        ${(project.intro || []).map(p => `<p>${escapeHTML(p)}</p>`).join("")}
      </section>

      ${(project.blocks || []).map(renderBlock).join("")}

      <section class="more-projects fade-in">
        <h2>其他相關設計</h2>
        <div class="more-grid">
          ${related.map(item => `
            <a class="more-card" href="${projectURL(item.slug)}">
              <img src="${escapeHTML(item.cover)}" alt="${escapeHTML(item.title)}" loading="lazy">
              <p>${escapeHTML(item.title)}</p>
            </a>
          `).join("")}
        </div>
      </section>

      <a class="back-top" href="#">↑ Back to Top</a>
    `;

    revealOnScroll();
  }

  function revealOnScroll() {
    const items = document.querySelectorAll(".fade-in");

    if (!("IntersectionObserver" in window)) {
      items.forEach(item => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    items.forEach(item => observer.observe(item));
  }

  setFilterButtons();
  renderProject();
})();