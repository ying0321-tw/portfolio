window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("boot").style.display = "none";
    document.getElementById("site").classList.remove("hidden");
  }, 1900);
});

document.querySelectorAll(".module").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    document.body.style.setProperty("--cyan", "#8df3ff");
  });
  item.addEventListener("mouseleave", () => {
    document.body.style.setProperty("--cyan", "#69e8ff");
  });
});
