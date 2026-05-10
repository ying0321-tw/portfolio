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
  const workCards = document.querySelectorAll('.work-grid .work-card');

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
          card.classList.add('is-visible');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* 作品彈窗資料
     只支援：
     image = JPG 圖片
     mp4   = MP4 影片
  */
  const worksData = {
    marketing: {
      category: '行銷專案',
      title: '板橋 YELLOWSTONE｜整合行銷專案',
      type: 'image',
      media: 'images/work-03.jpg',
      desc: '從活動企劃、品牌敘事、視覺主軸到社群推廣，整合線上與線下資源，讓專案不只是曝光，而是形成具體的溝通節奏。',
      contents: [
        '品牌規劃',
        '社群內容企劃',
        '活動視覺整合',
        '專案成效整理'
      ],
      info: {
        年份: '2025',
        類型: 'Marketing Project',
        角色: '企劃 / 品牌整合'
      },
      tags: ['行銷企劃', '品牌敘事', '社群內容']
    },

    graphic: {
      category: '平面設計',
      title: '協助犬｜品牌視覺設計',
      type: 'image',
      media: 'images/work-01.jpg',
      desc: '從品牌命名、標語、包裝到視覺系統，建立具有日常感與辨識度的品牌語言。',
      contents: [
        '品牌視覺方向',
        '包裝與延伸物設計',
        '版面與字級系統',
        '視覺應用整理'
      ],
      info: {
        工具: 'Illustrator / Photoshop'
      },
      tags: ['品牌視覺', '包裝設計', '排版']
    },

    video: {
      category: '短影片',
      title: '【扭蛋開箱】SR+二十世紀影業 異形',
      type: 'mp4',
      media: 'videos/brand-film.mp4',
      desc: '從腳本企劃、拍攝到剪輯節奏，提供扭蛋玩家玩具的樂趣。',
      contents: [
        '短影音腳本企劃',
        '拍攝分鏡安排',
        '剪輯節奏設計',
        '社群觀看情境整理'
      ],
      info: {
        年份: '2026',
        類型: 'Short Video',
        角色: '腳本 / 拍攝 / 剪輯',
        工具: 'CapCut'
      },
      tags: ['短影片', '腳本企劃', '剪輯']
    },

    photo: {
      category: '攝影',
      title: '猴硐貓村｜旅行攝影',
      type: 'image',
      media: 'images/work-05.jpg',
      desc: '用影像捕捉旅途中值得收藏的光線、場景與情緒，建立具有敘事性的視覺素材。',
      contents: [
        '光線與構圖觀察',
        '場景情緒紀錄',
        '影像色調整理',
        '可延伸素材挑選'
      ],
      tags: ['攝影', '光影', '情緒紀錄']
    },

    uiux: {
      category: 'UIUX',
      title: '迪士尼導覽 APP',
      type: 'image',
      media: 'images/work-02.jpg',
      desc: '結合 GPS、同伴定位、活動推播的迪士尼導覽 APP，讓使用者在園區內獲得更即時、便利且個人化的遊玩體驗。',
      contents: [
        '使用者痛點整理',
        '資訊架構與流程設計',
        'UI 視覺與元件規劃',
        'APP 功能情境設計'
      ],
      info: {
        工具: 'Figma'
      },
      tags: ['UIUX', 'APP', 'Disney', 'GPS']
    }
  };

  const modal = document.querySelector('#workModal');
  const modalMedia = document.querySelector('#modalMedia');
  const modalCategory = document.querySelector('#modalCategory');
  const modalTitle = document.querySelector('#modalTitle');
  const modalDesc = document.querySelector('#modalDesc');
  const modalTags = document.querySelector('#modalTags');
  const closeBtn = document.querySelector('.modal-close');
  const modalBg = document.querySelector('.modal-bg');

  function isAllowedMedia(data) {
    if (!data || !data.media) return false;

    const file = data.media.toLowerCase();

    if (data.type === 'image') {
      return file.endsWith('.jpg') || file.endsWith('.jpeg');
    }

    if (data.type === 'mp4') {
      return file.endsWith('.mp4');
    }

    return false;
  }

  function renderMedia(data) {
    if (!isAllowedMedia(data)) {
      return `
        <div class="media-error">
          此作品檔案格式不支援，請使用 JPG 或 MP4。
        </div>
      `;
    }

    if (data.type === 'mp4') {
      return `
        <video class="modal-video" controls playsinline>
          <source src="${data.media}" type="video/mp4">
          您的瀏覽器不支援影片播放。
        </video>
      `;
    }

    return `
      <img class="modal-image-file" src="${data.media}" alt="${data.title}">
    `;
  }

  function renderDetail(data) {
    const contentList = data.contents
      ? `
        <div class="modal-section">
          <h4>專案內容</h4>
          <ul>
            ${data.contents.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `
      : '';

    const infoList = data.info
      ? `
        <div class="modal-section">
          <h4>專案資訊</h4>
          <dl>
            ${Object.entries(data.info).map(([key, value]) => `
              <div>
                <dt>${key}</dt>
                <dd>${value}</dd>
              </div>
            `).join('')}
          </dl>
        </div>
      `
      : '';

    const tagList = data.tags
      ? `
        <div class="modal-section">
          <h4>標籤</h4>
          <div class="tag-list">
            ${data.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
        </div>
      `
      : '';

    return contentList + infoList + tagList;
  }

  function openModal(key) {
    const data = worksData[key];

    if (!data || !modal || !modalMedia) return;

    modalMedia.innerHTML = renderMedia(data);
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalTags.innerHTML = renderDetail(data);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal || !modalMedia) return;

    modal.classList.remove('active');
    modalMedia.innerHTML = '';
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
