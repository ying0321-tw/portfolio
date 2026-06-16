const categories = {
  planning: {
    no: 'OBSERVATORY 01', title: '企劃', desc: '接收資訊，整理方向。', label: 'PLANNING'
  },
  design: {
    no: 'OBSERVATORY 02', title: '設計', desc: '把抽象的想法，轉譯成看得見的樣子。', label: 'DESIGN'
  },
  video: {
    no: 'OBSERVATORY 03', title: '短影片', desc: '把故事變成讓人願意停下來看的畫面。', label: 'VIDEO'
  },
  uiux: {
    no: 'OBSERVATORY 04', title: 'UIUX', desc: '讓資訊更容易被理解，也更容易被使用。', label: 'UI/UX'
  },
  photo: {
    no: 'OBSERVATORY 05', title: '攝影', desc: '記錄那些讓我停下來看的瞬間。', label: 'PHOTOGRAPHY'
  }
};

const projects = [
  {
    id:'sigma-cis', category:'design', title:'SIGMA CIS', type:'品牌識別設計', year:'2025', image:'files/sigma-cover.jpg',
    one:'把商標延伸成品牌語言。',
    start:'SIGMA 需要一套能延伸到不同應用場景的識別系統，不只是單一標誌。',
    role:'我負責視覺系統整理、標準色、輔助圖形與品牌應用方向。',
    result:'完成一套能延伸到名片、社群、簡報與品牌印刷模擬的識別架構。',
    thinking:'我把重點放在「可延伸性」，因為好的識別不只是好看，而是不同情境下都能被穩定使用。'
  },
  {
    id:'ikea-frame', category:'video', title:'IKEA 相框改造', type:'短影片企劃', year:'2025', image:'files/video04.jpg',
    one:'原來大家喜歡的，不是 IKEA。',
    start:'想找一個扭蛋玩家會有共鳴的內容，而不是單純介紹商品。',
    role:'我負責腳本發想、拍攝、剪輯與社群上架。',
    result:'影片在 Facebook、Instagram、YouTube Shorts 都獲得不錯觀看，成為收納題材的代表案例。',
    thinking:'大家真正分享的理由不是 IKEA，而是「終於有地方放扭蛋」。所以前幾秒先呈現完成畫面，再補改造過程。'
  },
  {
    id:'brand-video', category:'video', title:'品牌形象影片', type:'影像製作', year:'2025', image:'files/video01.jpg',
    one:'用影像說故事，也讓品牌被看見。',
    start:'希望把商品特點轉成生活中的使用想像。',
    role:'我負責腳本、拍攝、剪輯與封面設計。',
    result:'完成適合社群平台觀看節奏的短影片。',
    thinking:'比起完整介紹，我更在意觀眾前三秒有沒有理由停下來。'
  },
  {
    id:'member-return', category:'planning', title:'會員回購機制', type:'企劃規劃', year:'2025', image:'files/marketing03.jpg',
    one:'讓使用者有理由再次回來。',
    start:'觀察到會員互動與回訪需要更明確的誘因。',
    role:'我負責機制發想、活動流程、文案與頁面溝通。',
    result:'整理出可執行的會員回購方向與活動架構。',
    thinking:'我思考的是「為什麼他要回來」，而不是只給折扣。'
  },
  {
    id:'yellowstone', category:'planning', title:'整合行銷專案', type:'行銷企劃', year:'2025', image:'files/work-03.jpg',
    one:'把場域重新介紹給生活圈。',
    start:'市場改建後，需要重新建立品牌印象與在地連結。',
    role:'我參與品牌溝通、社群內容、活動視覺與推廣節奏整理。',
    result:'建立一套線上線下都能使用的溝通架構。',
    thinking:'場域行銷不是只做漂亮，而是讓人知道「我為什麼要去」。'
  },
  {
    id:'assist-dog', category:'design', title:'協助犬品牌', type:'品牌視覺設計', year:'2024', image:'files/dog01.jpg',
    one:'把溫暖與專業放進同一套視覺。',
    start:'品牌需要在親近感與可信任感之間取得平衡。',
    role:'我負責視覺方向、標誌應用與延伸物設計。',
    result:'完成一套具日常感的品牌視覺。',
    thinking:'這類品牌不能太冰冷，但也不能過度可愛，所以我用簡潔的圖形和柔和語氣取得平衡。'
  },
  {
    id:'package-sausage', category:'design', title:'香腸包裝設計', type:'包裝視覺', year:'2025', image:'files/graphic05.jpg',
    one:'讓商品多一點日式記憶點。',
    start:'新商品需要延續品牌感，同時做出與既有品項的差異。',
    role:'我負責包裝視覺方向、色彩與版面配置。',
    result:'完成具日式氛圍但不脫離品牌系統的包裝方向。',
    thinking:'我不想只貼櫻花或富士山，而是用版面節奏和色彩去做日式感。'
  },
  {
    id:'taipei-music-app', category:'uiux', title:'北流會員 App', type:'UIUX 概念', year:'2025', image:'files/uiux02.jpg',
    one:'讓複雜的事，變得順暢。',
    start:'希望把演出資訊、會員功能與現場使用情境整合在一起。',
    role:'我負責流程整理、畫面架構與 Mockup 視覺。',
    result:'完成可呈現 RWD 與行動情境的介面概念。',
    thinking:'UIUX 對我來說不是畫好看的介面，而是讓人更快知道下一步要做什麼。'
  },
  {
    id:'travel-photo', category:'photo', title:'基隆・望幽谷', type:'攝影紀錄', year:'2024', image:'files/work-05.jpg',
    one:'風景有時候，比想像中更寂靜。',
    start:'在日常移動中記錄讓我停下來看的場景。',
    role:'我負責拍攝、構圖與色調整理。',
    result:'整理成一組具有空氣感的旅行攝影紀錄。',
    thinking:'攝影對我來說不是作品壓力，而是保留觀察能力的一種方式。'
  },
  {
    id:'calbee-video', category:'video', title:'Calbee 薯條模型', type:'短影片', year:'2025', image:'files/video02.jpg',
    one:'一包薯條，也能玩出互動感。',
    start:'這款商品的重點不是外觀，而是遊玩的過程。',
    role:'我負責腳本、拍攝與節奏剪輯。',
    result:'以遊玩過程放大緊張感與趣味。',
    thinking:'有些商品不適合靜態介紹，觀眾要看到「它怎麼玩」才會有興趣。'
  }
];

let activeCategory = 'design';
let lastCategoryScrollTarget = '#categoryPanel';

const categoryProjects = document.querySelector('#categoryProjects');
const featuredProjects = document.querySelector('#featuredProjects');
const categoryEyebrow = document.querySelector('#categoryEyebrow');
const categoryTitle = document.querySelector('#categoryTitle');
const categoryDesc = document.querySelector('#categoryDesc');
const projectDetail = document.querySelector('#projectDetail');
const backToCategory = document.querySelector('#backToCategory');

function createProjectCard(project){
  const card = document.createElement('article');
  card.className = 'project-card';
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="project-thumb">
      <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.remove()" />
    </div>
    <div class="project-body">
      <small>${categories[project.category].title}</small>
      <h3>${project.title}</h3>
      <p>${project.one}</p>
      <span class="project-arrow">→ 查看觀測紀錄</span>
    </div>
  `;
  card.addEventListener('click', () => openProject(project.id));
  card.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') openProject(project.id);
  });
  return card;
}

function renderCategory(category){
  activeCategory = category;
  const data = categories[category];
  categoryEyebrow.textContent = data.no;
  categoryTitle.textContent = data.title;
  categoryDesc.textContent = data.desc;

  categoryProjects.innerHTML = '';
  projects.filter(project => project.category === category).forEach(project => {
    categoryProjects.appendChild(createProjectCard(project));
  });
}

function renderFeatured(){
  featuredProjects.innerHTML = '';
  projects.slice(0,5).forEach(project => featuredProjects.appendChild(createProjectCard(project)));
}

function openProject(id){
  const project = projects.find(item => item.id === id);
  if(!project) return;
  document.querySelector('#detailCategory').textContent = `${categories[project.category].label} / ${project.year}`;
  document.querySelector('#detailTitle').textContent = project.title;
  document.querySelector('#detailMeta').textContent = project.type;
  document.querySelector('#detailCover').innerHTML = `<img src="${project.image}" alt="${project.title}" onerror="this.remove()" />`;
  document.querySelector('#detailStart').textContent = project.start;
  document.querySelector('#detailRole').textContent = project.role;
  document.querySelector('#detailResult').textContent = project.result;
  document.querySelector('#detailThinking').textContent = project.thinking;

  projectDetail.hidden = false;
  projectDetail.scrollIntoView({behavior:'smooth', block:'start'});
}

backToCategory.addEventListener('click', () => {
  document.querySelector(lastCategoryScrollTarget).scrollIntoView({behavior:'smooth'});
});

document.querySelectorAll('.station-node').forEach(node => {
  node.addEventListener('click', () => {
    const category = node.dataset.category;
    renderCategory(category);
    lastCategoryScrollTarget = '#categoryPanel';
    document.querySelector('#categoryPanel').scrollIntoView({behavior:'smooth'});
  });
});

const themeToggle = document.querySelector('#themeToggle');
themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  themeToggle.querySelector('.torch-text').textContent = next === 'dark' ? '點亮' : '熄滅';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, {threshold:.18});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

renderCategory(activeCategory);
renderFeatured();
