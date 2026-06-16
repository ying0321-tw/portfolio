const categories = {
  planning: { zh:'企劃', en:'PLANNING CUBE', desc:'把混亂的訊號整理成可以執行的方向。' },
  design: { zh:'設計', en:'DESIGN CUBE', desc:'把抽象的想法，轉譯成看得見的樣子。' },
  video: { zh:'短影片', en:'VIDEO CUBE', desc:'用影像與節奏，讓訊息被更多人看見。' },
  uiux: { zh:'UIUX', en:'UIUX CUBE', desc:'讓資訊與流程變得更清楚、更順手。' },
  photo: { zh:'攝影', en:'PHOTOGRAPHY CUBE', desc:'記錄看見的瞬間，也記錄當時的感受。' }
};

const projects = [
  { id:'sigma', category:'design', title:'SIGMA CIS', type:'品牌識別設計', year:'2025', line:'把商標延伸成品牌語言。', image:'files/sigma.jpg', sections:[
    ['這件事怎麼開始？','客戶希望建立更一致、更具辨識度的品牌系統，因此需要從標誌延伸到色彩、版面與應用規範。'],
    ['我主要負責什麼？','品牌識別規劃、CIS 手冊架構、色彩與輔助圖形整理，以及應用示意規劃。'],
    ['最後變成了什麼？','完成一套可延伸使用的品牌識別系統，讓後續名片、簡報、社群與印刷應用更一致。'],
    ['我當時怎麼想的','比起做出很多樣式，我更在意這套系統是否容易被使用，因為品牌規範的價值不只是好看，而是讓團隊能穩定延伸。']
  ]},
  { id:'dog', category:'design', title:'協助犬品牌', type:'品牌視覺設計', year:'2024', line:'在溫暖與專業之間取得平衡。', image:'files/dog01.jpg', sections:[['這件事怎麼開始？','想讓協助犬品牌有更親近的形象，同時保留可信任的專業感。'],['我主要負責什麼？','品牌視覺、包裝方向與延伸物設計。'],['最後變成了什麼？','完成一組具有日常感的品牌視覺。'],['我當時怎麼想的','這類主題不能只可愛，也不能太嚴肅，比例很重要。']]},
  { id:'sausage', category:'design', title:'日式香腸包裝', type:'包裝設計', year:'2025', line:'讓商品有同品牌感，也有新口味的記憶點。', image:'files/sausage.jpg', sections:[['這件事怎麼開始？','原有系列已有品牌語言，新品需要在一致中做出差異。'],['我主要負責什麼？','包裝視覺方向、版面與風格延伸。'],['最後變成了什麼？','形成更日式但不脫離品牌的包裝方向。'],['我當時怎麼想的','系列商品最難的是不能每款都重做，也不能每款都一樣。']]},
  { id:'member', category:'planning', title:'蛋舖會員回購機制', type:'企劃規劃', year:'2025', line:'讓會員有理由再次回來。', image:'files/marketing03.jpg', sections:[['這件事怎麼開始？','觀察會員回訪情境後，發現需要更明確的誘因與流程。'],['我主要負責什麼？','會員機制構想、活動流程與轉換情境整理。'],['最後變成了什麼？','建立一套更容易被理解的回購溝通方式。'],['我當時怎麼想的','不是每個人都不想買，有時候只是沒有被提醒，或不知道什麼時候該回來。']]},
  { id:'yellowstone', category:'planning', title:'YELLOWSTONE 整合行銷', type:'行銷專案', year:'2025', line:'從品牌、社群到活動溝通整合。', image:'files/work-03.jpg', sections:[['這件事怎麼開始？','市場改建後需要重新建立與消費者的連結。'],['我主要負責什麼？','社群規劃、活動內容、視覺溝通與成果整理。'],['最後變成了什麼？','讓線上線下素材更一致，活動資訊也更容易被理解。'],['我當時怎麼想的','市場不是只賣東西，也是在賣一種生活感。']]},
  { id:'ikea', category:'video', title:'IKEA 相框改造', type:'短影片製作', year:'2025', line:'原來大家喜歡的，不只是 IKEA。', image:'files/video04.jpg', sections:[['這件事怎麼開始？','想找一種扭蛋玩家會有共鳴的收納內容。'],['我主要負責什麼？','腳本、拍攝、剪輯與社群呈現。'],['最後變成了什麼？','影片帶來高觀看與分享，成為收納題材代表內容之一。'],['我當時怎麼想的','大家真正分享的原因不是 IKEA，而是終於有地方放扭蛋了，所以前 3 秒必須先讓人看到完成結果。']]},
  { id:'led', category:'video', title:'LED 磁吸燈', type:'短影片製作', year:'2025', line:'用生活情境建立使用想像。', image:'files/video01.jpg', sections:[['這件事怎麼開始？','商品需要在短時間內讓人理解使用情境。'],['我主要負責什麼？','腳本、拍攝、剪輯與封面設計。'],['最後變成了什麼？','建立新品曝光與情境式觀看。'],['我當時怎麼想的','實用型商品不能只拍功能，要拍出使用後的感覺。']]},
  { id:'calbee', category:'video', title:'Calbee 模型開箱', type:'短影片製作', year:'2025', line:'把開箱變成有節奏的遊戲感。', image:'files/video02.jpg', sections:[['這件事怎麼開始？','商品本身具備互動玩法，需要放大過程的緊張感。'],['我主要負責什麼？','腳本、拍攝與剪輯節奏。'],['最後變成了什麼？','讓模型玩法更直覺被看見。'],['我當時怎麼想的','玩具影片重點不是把東西拍完，而是讓觀眾想跟著玩。']]},
  { id:'app', category:'uiux', title:'北流會員 App', type:'UIUX 概念', year:'2025', line:'讓複雜的資訊變得更順手。', image:'files/uiux02.jpg', sections:[['這件事怎麼開始？','想整理演出、會員與場館資訊在手機上的使用流程。'],['我主要負責什麼？','流程規劃、介面視覺與功能情境設計。'],['最後變成了什麼？','完成一組更容易理解的 App Mockup。'],['我當時怎麼想的','介面不是把資訊塞進手機，而是決定使用者當下最需要看見什麼。']]},
  { id:'photo', category:'photo', title:'基隆・望幽谷', type:'攝影紀錄', year:'2024', line:'風景有時候，比想像中更寧靜。', image:'files/work-05.jpg', sections:[['這件事怎麼開始？','單純被當天的天氣與光線吸引。'],['我主要負責什麼？','拍攝、取景與色調整理。'],['最後變成了什麼？','留下一組自然風景影像紀錄。'],['我當時怎麼想的','攝影對我來說，是訓練觀察力的一種方式。']]}
];

const tabs = document.querySelector('#categoryTabs');
const grid = document.querySelector('#projectGrid');
const recordsTitle = document.querySelector('#recordsTitle');
const recordsEyebrow = document.querySelector('#recordsEyebrow');
const recordsDesc = document.querySelector('#recordsDesc');
let activeCategory = 'design';

function setActiveNav(hash){
  document.querySelectorAll('.main-nav a').forEach(a=>a.classList.toggle('active', a.getAttribute('href') === hash));
}

function renderTabs(){
  tabs.innerHTML = Object.entries(categories).map(([key,cat]) => `<button class="${key===activeCategory?'active':''}" data-category="${key}">${cat.zh}</button>`).join('');
}

function renderProjects(){
  const cat = categories[activeCategory];
  recordsTitle.textContent = cat.zh;
  recordsEyebrow.textContent = cat.en;
  recordsDesc.textContent = cat.desc;
  grid.innerHTML = projects.filter(p=>p.category===activeCategory).map(p=>`
    <article class="project-card" data-id="${p.id}">
      <div class="thumb" style="--image:url('${p.image}')"></div>
      <div>
        <small>${p.type}</small>
        <h3>${p.title}</h3>
        <p>${p.line}</p>
      </div>
      <span class="arrow">→</span>
    </article>
  `).join('');
}

function openCategory(category){
  activeCategory = category;
  renderTabs();
  renderProjects();
  location.hash = 'records';
}

function openProject(id){
  const p = projects.find(item=>item.id===id);
  if(!p) return;
  const cat = categories[p.category];
  document.querySelector('#breadcrumb').textContent = `HOME / ${cat.zh} / ${p.title}`;
  document.querySelector('#projectTitle').textContent = p.title;
  document.querySelector('#projectType').textContent = p.type;
  document.querySelector('#projectYear').textContent = p.year;
  document.querySelector('#projectMedia').style.setProperty('--project-image', `url('${p.image}')`);
  document.querySelector('#projectAccordion').innerHTML = p.sections.map((s,i)=>`
    <div class="accordion-item ${i===0?'open':''}">
      <button class="accordion-head" type="button"><span>${String(i+1).padStart(2,'0')}　${s[0]}</span><span>＋</span></button>
      <div class="accordion-body"><p>${s[1]}</p></div>
    </div>
  `).join('');
  location.hash = 'project';
}

document.addEventListener('click', e=>{
  const domain = e.target.closest('.domain-card');
  if(domain) openCategory(domain.dataset.category);

  const tab = e.target.closest('#categoryTabs button');
  if(tab){ activeCategory = tab.dataset.category; renderTabs(); renderProjects(); }

  const card = e.target.closest('.project-card');
  if(card) openProject(card.dataset.id);

  const acc = e.target.closest('.accordion-head');
  if(acc){ acc.parentElement.classList.toggle('open'); }

  const mode = e.target.closest('.mode-toggle');
  if(mode) document.body.classList.toggle('analysis');
});

window.addEventListener('hashchange',()=>setActiveNav(location.hash || '#home'));
renderTabs();
renderProjects();
setActiveNav(location.hash || '#home');
