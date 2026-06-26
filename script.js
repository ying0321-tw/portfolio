const loader = document.querySelector("#loader");
const nav = document.querySelector("#site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const glow = document.querySelector(".cursor-glow");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("is-hidden");
  }, 1850);
});

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("pointermove", (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const filterButtons = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");

function setFilter(filterName) {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filterName);
  });

  workCards.forEach((card) => {
    const categories = card.dataset.category || "";
    const show = filterName === "All" || categories.includes(filterName);
    card.classList.toggle("is-hidden", !show);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

document.querySelectorAll(".module-card").forEach((module) => {
  module.addEventListener("click", () => {
    const filter = module.dataset.filter;
    if (["Design", "UIUX", "Video"].includes(filter)) {
      setTimeout(() => setFilter(filter), 120);
    } else {
      setTimeout(() => setFilter("All"), 120);
    }
  });
});
