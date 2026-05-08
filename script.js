document.addEventListener('DOMContentLoaded', () => {

  const revealTargets = document.querySelectorAll(
    '.section-title, .about-photo, .about-copy, .skill-item, .works-header, .work-card, .contact-title, .contact-copy, .contact-info, .contact-image, .reveal-text'
  );

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('is-visible');

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.18
  });

  revealTargets.forEach(target => {
    observer.observe(target);
  });

});
