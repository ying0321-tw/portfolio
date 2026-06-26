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

      case "stats":
        return `
          <section class="project-block stats-block fade-in">
            ${(block.items || []).map(item => `<div>${escapeHTML(item)}</div>`).join("")}
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

    document.title = `${project.title}｜鄒佳穎作品集`;

    const imageBlocks = (project.blocks || []).filter(block => block.type === "image" || block.type === "gallery");
    const detailImages = imageBlocks.length ? imageBlocks : [{ type: "image", src: project.cover, alt: project.title }];

    projectRoot.innerHTML = `
      <section class="case-hero fade-in">
        <img src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.title)}">
      </section>

      <section class="case-intro fade-in">
        <h1>${escapeHTML(project.title)}</h1>
        <p class="case-subtitle">${escapeHTML(project.subtitle)}</p>
        <div class="case-meta">
          <span>${escapeHTML(project.year)}</span>
          <span>${escapeHTML(project.service)}</span>
        </div>
        ${(project.intro || []).map(p => `<p>${escapeHTML(p)}</p>`).join("")}
      </section>

      ${detailImages.map(block => {
        if (block.type === "gallery") {
          return `<section class="case-detail-gallery fade-in">${(block.images || []).map(img => `<img src="${escapeHTML(img.src)}" alt="${escapeHTML(img.alt || project.title)}" loading="lazy">`).join("")}</section>`;
        }
        return `<section class="case-full-image fade-in"><img src="${escapeHTML(block.src)}" alt="${escapeHTML(block.alt || project.title)}" loading="lazy"></section>`;
      }).join("")}

      <footer class="case-footer fade-in">
        <a href="index.html">← 回到作品列表</a>
        <a href="mailto:yin9423@gmail.com">yin9423@gmail.com</a>
      </footer>
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