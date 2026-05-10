document.addEventListener('DOMContentLoaded', () => {
  /* 滾動淡入 */
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

  /* Works 分類切換 */
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
          card.classList.add('show', 'is-visible');
        } else {
          card.classList.add('hide');
          card.classList.remove('show');
        }
      });
    });
  });

  /* 作品彈窗資料 */
  const worksData = {
    marketing: {
      category: '行銷專案',
      title: '台灣咖啡節｜整合行銷專案',
      image: 'images/work-03.jpg',
      desc: '從活動企劃、視覺主視覺到社群推廣，整合線上與線下資源，讓專案不只是曝光，而是形成具體的溝通節奏。',
      tags: ['活動企劃', '社群推廣', '整合行銷']
    },
    graphic: {
      category: '平面設計',
      title: '小島日和｜品牌視覺設計',
      image: 'images/work-01.jpg',
      desc: '從品牌命名、標語、包裝到視覺系統，建立具有日常感與辨識度的品牌語言。',
      tags: ['品牌視覺', '包裝設計', '排版']
    },
    video: {
      category: '短影片',
      title: 'Brand Film｜品牌形象影片',
      image: 'images/work-04.jpg',
      desc: '從腳本企劃、拍攝到剪輯節奏，將品牌故事轉換成能快速理解並留下記憶點的影像內容。',
      tags: ['腳本企劃', '拍攝', '剪輯']
    },
    photo: {
      category: '攝影',
      title: 'Travel Photography｜旅行攝影',
      image: 'images/work-05.jpg',
      desc: '用影像捕捉旅途中值得收藏的光線、場景與情緒，建立具有敘事性的視覺素材。',
      tags: ['構圖', '光影', '情緒紀錄']
    },
    uiux: {
      category: 'UIUX',
      title: '迪士尼導覽 APP',
      type: 'pdf',
      media: 'files/disney-uiux.pdf',
      desc: '結合 GPS、同伴定位、活動推播的迪士尼導覽 APP。',
      tags: ['UIUX', 'APP', 'Disney']
    }
  };

  const modal = document.querySelector('#workModal');
  const modalImage = document.querySelector('#modalImage');
  const modalCategory = document.querySelector('#modalCategory');
  const modalTitle = document.querySelector('#modalTitle');
  const modalDesc = document.querySelector('#modalDesc');
  const modalTags = document.querySelector('#modalTags');
  const closeBtn = document.querySelector('.modal-close');
  const modalBg = document.querySelector('.modal-bg');

  function openModal(key) {
    const data = worksData[key];

    if (!data || !modal) return;

    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    modalTags.innerHTML = data.tags
      .map(tag => `<span>${tag}</span>`)
      .join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal]').forEach(item => {
    item.addEventListener('click', () => {
      openModal(item.dataset.modal);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modalBg) {
    modalBg.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
