const header = document.querySelector(".site-header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".nav a");
const cards = document.querySelectorAll(".work-card");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");

    const text = link.textContent.toLowerCase();

    cards.forEach(card => {
      const category = card.dataset.category;
      const showAll = text.includes("all");
      const showBranding = text.includes("branding") && category === "branding";
      const showKeyVisual = text.includes("key visual") && category === "keyvisual";

      card.style.display = showAll || showBranding || showKeyVisual ? "block" : "none";
    });

    header.classList.remove("open");
  });
});
