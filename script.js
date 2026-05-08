document.addEventListener('DOMContentLoaded', () => {

  // 滾動淡入
  const revealTargets = document.querySelectorAll(
    '.reveal-text, .section-title, .about-photo, .about-copy, .work-card, .contact-title, .contact-info'
  );

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('is-visible');

      }

    });

  }, {
    threshold: 0.15
  });

  revealTargets.forEach(target => {
    observer.observe(target);
  });

  // 分類切換
  const filterButtons = document.querySelectorAll('.filter-nav button');
  const workCards = document.querySelectorAll('.work-card');

  filterButtons.forEach(button => {

    button.addEventListener('click', () => {

      const filter = button.dataset.filter;

      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      button.classList.add('active');

      workCards.forEach(card => {

        const category = card.dataset.category;

        if (filter === 'all' || category === filter) {

          card.classList.remove('hide');

          setTimeout(() => {
            card.classList.add('show');
          }, 50);

        } else {

          card.classList.remove('show');
          card.classList.add('hide');

        }

      });

    });

  });

});
