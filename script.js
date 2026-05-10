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
  marketing1: {
    category: '行銷專案',
    title: '板橋 YELLOWSTONE｜整合行銷專案',
    type: 'image',
    media: 'images/work-03.jpg',
    desc: '從活動企劃、品牌敘事、視覺主軸到社群推廣，整合線上與線下資源。',
    contents: ['品牌規劃', '社群內容企劃', '活動視覺整合', '專案成效整理'],
    info: { 年份: '2025', 類型: 'Marketing Project', 角色: '企劃 / 品牌整合' },
    tags: ['行銷企劃', '品牌敘事', '社群內容']
  },

  marketing2: {
    category: '行銷專案',
    title: '行銷專案 02｜專案名稱',
    type: 'image',
    media: 'files/marketing02-detail.jpg',
    desc: '請替換成此專案的詳細介紹。',
    contents: ['專案企劃', '社群內容', '活動執行', '成效整理'],
    info: { 類型: 'Marketing Project' },
    tags: ['行銷企劃', '社群']
  },

  marketing3: {
    category: '行銷專案',
    title: '行銷專案 03｜專案名稱',
    type: 'image',
    media: 'files/marketing03-detail.jpg',
    desc: '請替換成此專案的詳細介紹。',
    contents: ['專案企劃', '社群內容', '活動執行', '成效整理'],
    info: { 類型: 'Marketing Project' },
    tags: ['行銷企劃', '社群']
  },

  marketing4: {
    category: '行銷專案',
    title: '行銷專案 04｜專案名稱',
    type: 'image',
    media: 'files/marketing04-detail.jpg',
    desc: '請替換成此專案的詳細介紹。',
    contents: ['專案企劃', '社群內容', '活動執行', '成效整理'],
    info: { 類型: 'Marketing Project' },
    tags: ['行銷企劃', '社群']
  },

  marketing5: {
    category: '行銷專案',
    title: '行銷專案 05｜專案名稱',
    type: 'image',
    media: 'files/marketing05-detail.jpg',
    desc: '請替換成此專案的詳細介紹。',
    contents: ['專案企劃', '社群內容', '活動執行', '成效整理'],
    info: { 類型: 'Marketing Project' },
    tags: ['行銷企劃', '社群']
  },

  graphic1: {
    category: '平面設計',
    title: '協助犬｜品牌視覺設計',
    type: 'image',
    media: 'images/work-01.jpg',
    desc: '從品牌命名、標語、包裝到視覺系統，建立具有日常感與辨識度的品牌語言。',
    contents: ['品牌視覺方向', '包裝與延伸物設計', '版面與字級系統', '視覺應用整理'],
    info: { 工具: 'Illustrator / Photoshop' },
    tags: ['品牌視覺', '包裝設計', '排版']
  },

  graphic2: {
    category: '平面設計',
    title: '平面設計 02｜專案名稱',
    type: 'image',
    media: 'files/graphic02-detail.jpg',
    desc: '請替換成此設計專案的詳細介紹。',
    contents: ['視覺設計', '版面規劃', '延伸應用'],
    info: { 工具: 'Illustrator / Photoshop' },
    tags: ['平面設計', '視覺']
  },

  graphic3: {
    category: '平面設計',
    title: '平面設計 03｜專案名稱',
    type: 'image',
    media: 'files/graphic03-detail.jpg',
    desc: '請替換成此設計專案的詳細介紹。',
    contents: ['視覺設計', '版面規劃', '延伸應用'],
    info: { 工具: 'Illustrator / Photoshop' },
    tags: ['平面設計', '視覺']
  },

  graphic4: {
    category: '平面設計',
    title: '平面設計 04｜專案名稱',
    type: 'image',
    media: 'files/graphic04-detail.jpg',
    desc: '請替換成此設計專案的詳細介紹。',
    contents: ['視覺設計', '版面規劃', '延伸應用'],
    info: { 工具: 'Illustrator / Photoshop' },
    tags: ['平面設計', '視覺']
  },

  graphic5: {
    category: '平面設計',
    title: '平面設計 05｜專案名稱',
    type: 'image',
    media: 'files/graphic05-detail.jpg',
    desc: '請替換成此設計專案的詳細介紹。',
    contents: ['視覺設計', '版面規劃', '延伸應用'],
    info: { 工具: 'Illustrator / Photoshop' },
    tags: ['平面設計', '視覺']
  },

  graphic6: {
    category: '平面設計',
    title: '平面設計 06｜專案名稱',
    type: 'image',
    media: 'files/graphic06-detail.jpg',
    desc: '請替換成此設計專案的詳細介紹。',
    contents: ['視覺設計', '版面規劃', '延伸應用'],
    info: { 工具: 'Illustrator / Photoshop' },
    tags: ['平面設計', '視覺']
  },

  video1: {
    category: '短影片',
    title: '扭蛋開箱｜扭蛋拍攝',
    type: 'mp4',
    media: 'videos/brand-film.mp4',
    desc: '從腳本企劃、拍攝到剪輯節奏，呈現扭蛋玩家感受玩具的樂趣。',
    contents: ['短影音腳本企劃', '拍攝分鏡安排', '剪輯節奏設計'],
    info: { 類型: 'Short Video', 工具: 'CapCut' },
    tags: ['短影片', '腳本企劃', '剪輯']
  },

  video2: {
    category: '短影片',
    title: '短影片 02｜專案名稱',
    type: 'mp4',
    media: 'files/video02-detail.mp4',
    desc: '請替換成此短影片專案的詳細介紹。',
    contents: ['腳本企劃', '拍攝', '剪輯'],
    info: { 類型: 'Short Video' },
    tags: ['短影片']
  },

  video3: {
    category: '短影片',
    title: '短影片 03｜專案名稱',
    type: 'mp4',
    media: 'files/video03-detail.mp4',
    desc: '請替換成此短影片專案的詳細介紹。',
    contents: ['腳本企劃', '拍攝', '剪輯'],
    info: { 類型: 'Short Video' },
    tags: ['短影片']
  },

  video4: {
    category: '短影片',
    title: '短影片 04｜專案名稱',
    type: 'mp4',
    media: 'files/video04-detail.mp4',
    desc: '請替換成此短影片專案的詳細介紹。',
    contents: ['腳本企劃', '拍攝', '剪輯'],
    info: { 類型: 'Short Video' },
    tags: ['短影片']
  },

  video5: {
    category: '短影片',
    title: '短影片 05｜專案名稱',
    type: 'mp4',
    media: 'files/video05-detail.mp4',
    desc: '請替換成此短影片專案的詳細介紹。',
    contents: ['腳本企劃', '拍攝', '剪輯'],
    info: { 類型: 'Short Video' },
    tags: ['短影片']
  },

  video6: {
    category: '短影片',
    title: '短影片 06｜專案名稱',
    type: 'mp4',
    media: 'files/video06-detail.mp4',
    desc: '請替換成此短影片專案的詳細介紹。',
    contents: ['腳本企劃', '拍攝', '剪輯'],
    info: { 類型: 'Short Video' },
    tags: ['短影片']
  },

  video7: {
    category: '短影片',
    title: '短影片 07｜專案名稱',
    type: 'mp4',
    media: 'files/video07-detail.mp4',
    desc: '請替換成此短影片專案的詳細介紹。',
    contents: ['腳本企劃', '拍攝', '剪輯'],
    info: { 類型: 'Short Video' },
    tags: ['短影片']
  },

  video8: {
    category: '短影片',
    title: '短影片 08｜專案名稱',
    type: 'mp4',
    media: 'files/video08-detail.mp4',
    desc: '請替換成此短影片專案的詳細介紹。',
    contents: ['腳本企劃', '拍攝', '剪輯'],
    info: { 類型: 'Short Video' },
    tags: ['短影片']
  },

  video9: {
    category: '短影片',
    title: '短影片 09｜專案名稱',
    type: 'mp4',
    media: 'files/video09-detail.mp4',
    desc: '請替換成此短影片專案的詳細介紹。',
    contents: ['腳本企劃', '拍攝', '剪輯'],
    info: { 類型: 'Short Video' },
    tags: ['短影片']
  },

  video10: {
    category: '短影片',
    title: '短影片 10｜專案名稱',
    type: 'mp4',
    media: 'files/video10-detail.mp4',
    desc: '請替換成此短影片專案的詳細介紹。',
    contents: ['腳本企劃', '拍攝', '剪輯'],
    info: { 類型: 'Short Video' },
    tags: ['短影片']
  },

  photo1: {
    category: '攝影',
    title: '猴硐貓村｜旅行攝影',
    type: 'image',
    media: 'images/work-05.jpg',
    desc: '用影像捕捉旅途中值得收藏的光線、場景與情緒。',
    contents: ['光線與構圖觀察', '場景情緒紀錄', '影像色調整理'],
    tags: ['攝影', '光影', '情緒紀錄']
  },

  photo2: {
    category: '攝影',
    title: '攝影 02｜作品名稱',
    type: 'image',
    media: 'files/photo02-detail.jpg',
    desc: '請替換成此攝影作品的詳細介紹。',
    contents: ['影像拍攝', '色調整理', '素材挑選'],
    tags: ['攝影']
  },

  photo3: {
    category: '攝影',
    title: '攝影 03｜作品名稱',
    type: 'image',
    media: 'files/photo03-detail.jpg',
    desc: '請替換成此攝影作品的詳細介紹。',
    contents: ['影像拍攝', '色調整理', '素材挑選'],
    tags: ['攝影']
  },

  uiux1: {
    category: 'UIUX',
    title: '迪士尼導覽 APP',
    type: 'image',
    media: 'files/disney-uiux.jpg',
    desc: '結合 GPS、同伴定位、活動推播的迪士尼導覽 APP，讓使用者在園區內獲得更即時、便利且個人化的遊玩體驗。',
    contents: ['使用者痛點整理', '資訊架構與流程設計', 'UI 視覺與元件規劃', 'APP 功能情境設計'],
    info: { 工具: 'Figma' },
    tags: ['UIUX', 'APP', 'Disney', 'GPS']
  },

  uiux2: {
    category: 'UIUX',
    title: '官網設計｜和正農作',
    type: 'image',
    media: 'files/uiux-long.jpg',
    desc: '以自然職人風格重新建構品牌官網，整合購物打造更直覺且具溫度感的烘焙品牌。',
    contents: ['使用者流程規劃', 'UI 介面設計', '功能情境設計'],
    info: { 工具: 'Figma' },
    tags: ['UIUX', 'APP']
  },

  uiux3: {
    category: 'UIUX',
    title: 'UIUX 03｜專案名稱',
    type: 'image',
    media: 'files/uiux03-detail.jpg',
    desc: '請替換成此 UIUX 專案的詳細介紹。',
    contents: ['使用者流程規劃', 'UI 介面設計', '功能情境設計'],
    info: { 工具: 'Figma' },
    tags: ['UIUX', 'APP']
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
