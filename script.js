document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
