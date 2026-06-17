const categories={
  planning:{index:'01',zh:'企劃',en:'Planning',desc:'策略、企劃、整合',icon:'◔',color:'#57e5ff',tags:['all','策略','活動','內容'],pos:['-38%','0%']},
  design:{index:'02',zh:'設計',en:'Design',desc:'品牌、平面、視覺',icon:'△',color:'#a76dff',tags:['all','品牌','平面','包裝'],pos:['-19%','-80px']},
  video:{index:'03',zh:'短影片',en:'Video',desc:'短片、剪輯、敘事',icon:'▣',color:'#ffd27a',tags:['all','開箱','收納','社群'],pos:['19%','-80px']},
  uiux:{index:'04',zh:'UIUX',en:'UIUX',desc:'介面、體驗、系統',icon:'◎',color:'#57e5ff',tags:['all','APP','Web','Flow'],pos:['38%','0%']},
  photo:{index:'05',zh:'攝影',en:'Photography',desc:'影像、紀錄、觀察',icon:'✦',color:'#6d86ff',tags:['all','旅行','日常'],pos:['0%','78px']}
};
const projects=[
  {id:'yellowstone',cat:'planning',tag:'策略',title:'黃石整合行銷',sub:'把活動與品牌訊息整理成可執行的方向。',year:'2025',thumb:'linear-gradient(135deg,#1d3557,#4cc9f0)',sections:['市場改建後需要重新建立在地生活連結。','我主要負責活動架構、溝通主軸與視覺需求整理。','最後整合成線上線下可使用的行銷素材。','我在意的是：如何讓市場不是只有「賣東西」，而是變成生活場景。']},
  {id:'member',cat:'planning',tag:'活動',title:'蛋舖會員回購機制',sub:'讓消費者知道什麼時候該回來。',year:'2025',thumb:'linear-gradient(135deg,#0f2027,#2c5364)',sections:['觀察到會員不是不想買，而是缺少回訪理由。','我規劃會員誘因、回購節點與活動流程。','最後形成可放入官網與社群的回購溝通。','活動不只是優惠，而是要創造「回來看一下」的理由。']},
  {id:'sigma',cat:'design',tag:'品牌',title:'SIGMA CIS',sub:'把商標延伸成品牌語言。',year:'2026',thumb:'linear-gradient(135deg,#111827,#64748b)',sections:['品牌需要從單一 Logo 延伸成完整識別系統。','我主要負責 CIS 架構、規範頁面與應用情境整理。','最後建立品牌色彩、輔助圖形與使用規範。','我在想的是：一個標誌如何真正變成品牌可以使用的語言。']},
  {id:'dog',cat:'design',tag:'品牌',title:'協助犬品牌',sub:'讓溫暖與專業放進同一個視覺裡。',year:'2024',thumb:'linear-gradient(135deg,#ffe8a3,#f6b17a)',sections:['品牌需要兼具親近感與信任感。','我負責品牌視覺方向、包裝與延伸物設計。','最後完成一套可延伸的視覺系統。','最難的是不要只做可愛，而是讓可愛背後有穩定感。']},
  {id:'sausage',cat:'design',tag:'包裝',title:'日式香腸包裝',sub:'在系列品牌中加入日式風格。',year:'2026',thumb:'linear-gradient(135deg,#732626,#e85d04)',sections:['同系列商品需要推出新口味包裝。','我負責包裝視覺方向、日式元素與版面配置。','最後產出兼具系列感與新品差異的包裝。','日式不能只靠圖案，要控制比例、色彩與留白。']},
  {id:'ikea',cat:'video',tag:'收納',title:'IKEA 相框改造',sub:'原來大家喜歡的，不只是 IKEA。',year:'2025',thumb:'linear-gradient(135deg,#111827,#6b7280)',sections:['想找到能讓扭蛋玩家共鳴的內容。','我負責腳本、拍攝與剪輯。','最後 Facebook 觀看達 210K+。','我發現大家喜歡的不是 IKEA，而是「終於有地方放扭蛋」。']},
  {id:'led',cat:'video',tag:'開箱',title:'LED 磁吸插座燈',sub:'用生活場景建立使用想像。',year:'2025',thumb:'linear-gradient(135deg,#00296b,#00b4d8)',sections:['新品需要快速讓人理解使用情境。','我負責腳本、商品拍攝、場景展示與剪輯。','最後累積 FB 51K+ 觀看。','商品影片最重要的是：讓人看見自己會怎麼用它。']},
  {id:'calbee',cat:'video',tag:'社群',title:'Calbee 薯條模型',sub:'把模型開箱拍成一個小遊戲。',year:'2025',thumb:'linear-gradient(135deg,#f59e0b,#ef4444)',sections:['商品本身有互動性，適合放大遊玩感。','我負責開箱節奏、畫面設計與剪輯。','最後讓商品特色更容易被理解。','我會先找商品最像「故事」的地方，再決定影片節奏。']},
  {id:'metro',cat:'uiux',tag:'APP',title:'北流會員 App',sub:'讓複雜資訊變得順手。',year:'2026',thumb:'linear-gradient(135deg,#94a3b8,#0f172a)',sections:['場館資訊與會員功能需要更直覺的整合。','我負責流程規劃、介面結構與 Mockup 呈現。','最後整理出可展示的 App 概念流程。','UIUX 對我來說不是畫畫面，而是幫人少想一步。']},
  {id:'cat',cat:'photo',tag:'旅行',title:'猴硐貓村',sub:'記錄那些容易被忽略的瞬間。',year:'2024',thumb:'linear-gradient(135deg,#14532d,#86efac)',sections:['旅行途中以自然視角捕捉場景。','我主要進行影像拍攝與色調整理。','最後保留一組帶有日常情緒的影像紀錄。','攝影讓我練習慢下來，看見很小的事情。']}
];
let currentCategory='design';
let currentTag='all';

function initStars(){
  const canvas=document.getElementById('starCanvas');
  const ctx=canvas.getContext('2d');
  let w=0,h=0,stars=[];
  function resize(){
    w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight;
    stars=Array.from({length:Math.max(70,Math.floor(w*h/9500))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.4+.2,a:Math.random()*Math.PI*2,s:Math.random()*.015+.004}));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    for(const p of stars){
      p.a+=p.s;
      ctx.globalAlpha=.18+Math.sin(p.a)*.35;
      ctx.fillStyle='#c9edff';
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha=1;
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize',resize,{passive:true}); resize(); draw();
}

function buildOrbit(){
  const box=document.getElementById('orbitPicker');
  box.innerHTML='';
  Object.entries(categories).forEach(([key,c],i)=>{
    const b=document.createElement('button');
    b.className='orbit-card';
    b.dataset.category=key;
    b.style.setProperty('--tx',c.pos[0]);
    b.style.setProperty('--ty',c.pos[1]);
    b.style.setProperty('--c',c.color);
    b.innerHTML=`<span class="orbit-iconbox"><span>${c.icon}</span></span><span><h3>${c.zh}</h3><p>${c.en}</p></span><span class="arrow">→</span>`;
    b.addEventListener('mouseenter',()=>{
      box.style.transform=`rotate(${(i-2)*-2.5}deg)`;
      document.querySelectorAll('.orbit-card').forEach(x=>{ if(x!==b) x.classList.add('dim'); });
    });
    b.addEventListener('mouseleave',()=>{
      box.style.transform='rotate(0deg)';
      document.querySelectorAll('.orbit-card').forEach(x=>x.classList.remove('dim'));
    });
    b.addEventListener('click',()=>openCategory(key));
    box.appendChild(b);
  });
}

function updateNav(active){
  const nav=document.querySelector('.main-nav');
  const indicator=document.querySelector('.nav-indicator');
  const buttons=[...document.querySelectorAll('.nav-link')];
  buttons.forEach(btn=>btn.classList.toggle('active',active==='home'?btn.hasAttribute('data-home'):btn.dataset.category===active));
  const target=buttons.find(btn=>btn.classList.contains('active')) || buttons[0];
  if(target && indicator && nav){
    const nr=nav.getBoundingClientRect(); const tr=target.getBoundingClientRect();
    indicator.style.width=`${Math.max(48,tr.width)}px`;
    indicator.style.transform=`translateX(${tr.left-nr.left}px)`;
  }
}
function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function openCategory(cat){
  currentCategory=cat; currentTag='all';
  const c=categories[cat];
  updateNav(cat);
  document.getElementById('categoryCrumb').textContent=c.zh;
  document.getElementById('categoryNo').textContent=`OBSERVATION ${c.index}`;
  document.getElementById('categoryTitle').textContent=`${c.zh} ${c.en}`;
  document.getElementById('categoryDesc').textContent=c.desc;
  document.getElementById('categorySymbol').style.setProperty('--symbol',c.color);
  document.getElementById('categorySymbol').querySelector('span').textContent=c.icon;
  buildTags(c); renderProjects(); showView('categoryView');
}
function buildTags(c){
  const wrap=document.getElementById('tagFilter'); wrap.innerHTML='';
  c.tags.forEach(t=>{
    const b=document.createElement('button'); b.textContent=t==='all'?'ALL':t; b.className=t===currentTag?'active':'';
    b.onclick=()=>{currentTag=t;buildTags(c);renderProjects();}; wrap.appendChild(b);
  });
}
function renderProjects(){
  const list=document.getElementById('projectList'); list.innerHTML='';
  projects.filter(p=>p.cat===currentCategory&&(currentTag==='all'||p.tag===currentTag)).forEach((p,i)=>{
    const card=document.createElement('button'); card.className='project-card';
    card.innerHTML=`<span class="thumb" style="--thumb:${p.thumb}"></span><span><span class="meta">${String(i+1).padStart(2,'0')} / ${p.tag} / ${p.year}</span><h4>${p.title}</h4><p>${p.sub}</p></span><span>→</span>`;
    card.onclick=()=>openProject(p.id); list.appendChild(card);
  });
}
function openProject(id){
  const p=projects.find(x=>x.id===id); const c=categories[p.cat]; currentCategory=p.cat;
  document.getElementById('backToCategory').textContent=c.zh;
  document.getElementById('projectMeta').textContent=`OBSERVATION ${c.index} / ${p.year}`;
  document.getElementById('projectTitle').textContent=p.title;
  document.getElementById('projectSub').textContent=p.sub;
  document.getElementById('projectMedia').style.setProperty('--media',p.thumb);
  const labels=['這件事怎麼開始？','我主要負責什麼？','最後變成了什麼？','我當時怎麼想的'];
  const acc=document.getElementById('projectAccordion'); acc.innerHTML='';
  p.sections.forEach((text,i)=>{
    const item=document.createElement('div'); item.className='acc-item'+(i===0?' open':'');
    item.innerHTML=`<button class="acc-btn"><span>${String(i+1).padStart(2,'0')}　${labels[i]}</span><span>${i===0?'−':'+'}</span></button><div class="acc-panel"><p>${text}</p></div>`;
    item.querySelector('.acc-btn').onclick=()=>{item.classList.toggle('open');item.querySelector('.acc-btn span:last-child').textContent=item.classList.contains('open')?'−':'+';};
    acc.appendChild(item);
  });
  showView('projectView');
}
function bindEvents(){
  document.querySelectorAll('[data-category]').forEach(btn=>btn.addEventListener('click',()=>openCategory(btn.dataset.category)));
  document.querySelectorAll('[data-home]').forEach(btn=>btn.addEventListener('click',()=>{updateNav('home');showView('homeView');}));
  document.getElementById('backToCategory').onclick=()=>openCategory(currentCategory);
  document.getElementById('backToList').onclick=()=>openCategory(currentCategory);
  document.getElementById('torchBtn').onclick=()=>document.body.classList.toggle('theme-light');
  document.getElementById('signalBtn').onclick=()=>{const b=document.getElementById('signalBtn');b.textContent=b.textContent.includes('ZH')?'SIGNAL：EN':'SIGNAL：ZH';};
  window.addEventListener('resize',()=>updateNav(document.querySelector('.nav-link.active')?.dataset.category || 'home'),{passive:true});
}
initStars(); buildOrbit(); bindEvents();
setTimeout(()=>{document.body.classList.remove('is-intro');document.body.classList.add('intro-done');updateNav('home');},3100);
setTimeout(()=>updateNav('home'),100);
