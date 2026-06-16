const categories = {
  planning: { index:'03 / PLANNING OBSERVATORY', title:'PLANNING\nOBSERVATORY', desc:'接收資訊，整理方向。', zh:'企劃' },
  design: { index:'03 / DESIGN OBSERVATORY', title:'DESIGN\nOBSERVATORY', desc:'把想法轉譯成看得見的樣子。', zh:'設計' },
  video: { index:'03 / VIDEO OBSERVATORY', title:'VIDEO\nOBSERVATORY', desc:'把故事傳遞出去。', zh:'短影片' },
  uiux: { index:'03 / UIUX OBSERVATORY', title:'UIUX\nOBSERVATORY', desc:'讓複雜變得順暢。', zh:'UIUX' },
  photo: { index:'03 / PHOTO OBSERVATORY', title:'PHOTO\nOBSERVATORY', desc:'記錄觀察與感受。', zh:'攝影' }
};
const projects = [
  {id:'sigma',cat:'design',title:'SIGMA CIS',type:'品牌識別設計',year:'2025',cover:'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=900&q=80',line:'把商標延伸成品牌語言。',start:'SIGMA 希望把品牌識別整理成更清楚、可延伸的系統。',role:'我協助整理識別邏輯、標準色、輔助圖形與應用版面。',result:'完成 CIS 手冊與多種品牌應用示意，讓後續使用更一致。',thought:'我當時在想，識別不是只有 Logo 好看，而是別人拿到之後能不能正確使用。'},
  {id:'ikea',cat:'video',title:'IKEA 相框改造',type:'短影片企劃',year:'2025',cover:'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80',line:'原來大家喜歡的，不是 IKEA。',start:'想找一種扭蛋玩家會產生共鳴的內容。',role:'我負責腳本、拍攝、剪輯與社群發布。',result:'Facebook 觀看 210K+，IG 18K，YouTube 24K。',thought:'大家分享的重點不是 IKEA，而是「終於有地方放扭蛋」。所以前 3 秒要先給收納完成的畫面。'},
  {id:'brand-video',cat:'video',title:'品牌形象影片',type:'影像製作',year:'2024',cover:'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',line:'用影像說故事，也讓品牌被看見。',start:'品牌需要一支能快速說明氣質與服務內容的影片。',role:'參與腳本、拍攝規劃與剪輯節奏整理。',result:'完成可用於官網、簡報與社群的形象影片素材。',thought:'形象影片不是塞滿資訊，而是先讓人感受到品牌是什麼樣子。'},
  {id:'beitou-app',cat:'uiux',title:'北流會員 App',type:'UIUX 概念',year:'2024',cover:'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',line:'讓複雜的事，變得簡單。',start:'希望重新思考演出資訊、會員、票券如何被整合。',role:'我負責流程發想、介面草圖與 Mockup 呈現。',result:'建立首頁、演出資訊、會員票券等核心流程畫面。',thought:'UIUX 最重要不是畫得漂亮，是使用者能不能不用想太多就完成事情。'},
  {id:'photo-hill',cat:'photo',title:'基隆・望幽谷',type:'攝影紀錄',year:'2023',cover:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',line:'風景有時候，比想像中更療癒。',start:'旅行時想記錄一些讓人停下來的風景。',role:'攝影、選圖、色調整理。',result:'完成一組自然景觀與光線紀錄。',thought:'攝影對我來說比較像練習觀察。'},
  {id:'member',cat:'planning',title:'會員回購機制',type:'企劃規劃',year:'2025',cover:'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',line:'讓會員有理由再回來。',start:'觀察到使用者回訪與再購買誘因不足。',role:'我整理會員情境、活動邏輯與頁面資訊。',result:'規劃回購誘因與活動流程，作為官網機制調整參考。',thought:'很多時候不是大家不想買，而是不知道什麼時候該回來。'}
];
const featured = projects.slice(0,5);
const qs = (s)=>document.querySelector(s);
const qsa = (s)=>document.querySelectorAll(s);
function card(p, className='work-card'){
  return `<article class="${className}" data-id="${p.id}"><img src="${p.cover}" alt="${p.title}"><div><small>${categories[p.cat].zh}</small><h3>${p.title}</h3><p>${p.line}</p><span class="arrow">→</span></div></article>`;
}
function record(p){
  return `<article class="record-card" data-id="${p.id}"><img src="${p.cover}" alt="${p.title}"><div><h4>${p.title}</h4><p>${p.type}｜${p.year}</p></div><span class="arrow">→</span></article>`;
}
function openCategory(cat){
  const c=categories[cat];
  qs('#fieldIndex').textContent=c.index;
  qs('#fieldTitle').innerHTML=c.title.replace('\n','<br>');
  qs('#fieldDesc').textContent=c.desc;
  qs('#categoryRecords').innerHTML=projects.filter(p=>p.cat===cat).map(record).join('');
  qs('#fieldView').scrollIntoView({behavior:'smooth'});
  bindProjectCards();
}
function openProject(id){
  const p=projects.find(x=>x.id===id); if(!p) return;
  qs('#projectTitle').textContent=p.title;
  qs('#projectMeta').textContent=`${p.type}｜${p.year}`;
  qs('#breadcrumb').textContent=`HOME ＞ ${categories[p.cat].zh} ＞ ${p.title}`;
  qs('#projectStart').innerHTML=`<p>${p.start}</p><img src="${p.cover}" alt="${p.title}">`;
  qs('#projectRole').innerHTML=`<p>${p.role}</p>`;
  qs('#projectResult').innerHTML=`<p>${p.result}</p>`;
  qs('#projectThought').innerHTML=`<p>${p.thought}</p>`;
  qs('#projectView').classList.add('active');
  qs('#projectView').scrollIntoView({behavior:'smooth'});
}
function bindProjectCards(){ qsa('[data-id]').forEach(el=>el.onclick=()=>openProject(el.dataset.id)); }
qs('#featuredGrid').innerHTML=featured.map(card).join(''); bindProjectCards();
qsa('.domain').forEach(btn=>btn.onclick=()=>openCategory(btn.dataset.category));
qs('#backToMap').onclick=()=>qs('#observatories').scrollIntoView({behavior:'smooth'});
qs('#backToField').onclick=()=>qs('#fieldView').scrollIntoView({behavior:'smooth'});
qs('#themeToggle').onclick=()=>{
  document.body.classList.toggle('theme-light');
  qs('.torch-label').textContent=document.body.classList.contains('theme-light')?'分析模式':'觀測模式';
};
qsa('.project-section button').forEach(btn=>btn.onclick=()=>{
  const section=btn.parentElement; const open=section.classList.contains('open');
  qsa('.project-section').forEach(s=>{s.classList.remove('open'); s.querySelector('span').textContent='＋'});
  if(!open){ section.classList.add('open'); btn.querySelector('span').textContent='−'; }
});
