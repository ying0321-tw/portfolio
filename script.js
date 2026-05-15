document.addEventListener('DOMContentLoaded',()=>{

/*========================
滾動動畫
=========================*/

const revealTargets=document.querySelectorAll(
'.reveal-text,.section-title,.about-photo,.about-copy,.work-card,.contact-title,.contact-info'
);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('is-visible');

}

});

},{
threshold:.15
});

revealTargets.forEach(item=>{

observer.observe(item);

});


/*========================
分類篩選
=========================*/

const filterButtons=document.querySelectorAll(
'.filter-nav button'
);

const workCards=document.querySelectorAll(
'.work-grid .work-card'
);

filterButtons.forEach(button=>{

button.addEventListener('click',()=>{

const filter=button.dataset.filter;

filterButtons.forEach(btn=>{

btn.classList.remove('active');

});

button.classList.add('active');

workCards.forEach(card=>{

const category=card.dataset.category;

if(
filter==="all" ||
category===filter
){

card.classList.remove('hide');

}else{

card.classList.add('hide');

}

});

});

});


/*========================
作品資料
=========================*/

const worksData={

marketing1:{

category:"行銷專案",

title:"板橋 YELLOWSTONE｜整合行銷",

media:"files/work-03.jpg",

type:"image",

desc:"從品牌策略、社群企劃到活動視覺整合，建立市場改建後的新品牌印象。",

contents:[
"品牌定位",
"社群企劃",
"活動整合",
"視覺規劃"
],

info:{
年份:"2025",
工具:"Meta/Figma"
}

},

graphic1:{

category:"平面設計",

title:"協助犬｜品牌視覺設計",

media:"files/dog-long.jpg",

type:"image",

desc:"建立品牌識別系統與延伸視覺。",

contents:[
"LOGO設計",
"CIS",
"延伸應用"
],

info:{
工具:"Illustrator"
}

},

video1:{

category:"短影片",

title:"蛋舖雙11活動影片",

embed:
"https://www.youtube.com/embed/YOUR_ID",

desc:
"短影音腳本企劃、拍攝、剪輯。",

contents:[
"腳本規劃",
"拍攝",
"剪輯"
],

info:{
工具:"Capcut"
}

},

photo1:{

category:"攝影",

title:"猴硐貓村",

media:"files/work-05.jpg",

type:"image",

desc:
"透過旅行紀錄不同場景氛圍。"

},

uiux1:{

category:"UIUX",

title:"迪士尼導覽 APP",

media:"files/disney-uiux.jpg",

type:"image",

desc:
"整合即時定位與遊園資訊。",

contents:[
"資訊架構",
"流程設計",
"UI設計"
],

info:{
工具:"Figma"
}

}

};



/*========================
modal
=========================*/


const modal=
document.querySelector(
'#workModal'
);

const modalMedia=
document.querySelector(
'#modalMedia'
);

const modalCategory=
document.querySelector(
'#modalCategory'
);

const modalTitle=
document.querySelector(
'#modalTitle'
);

const modalDesc=
document.querySelector(
'#modalDesc'
);

const modalTags=
document.querySelector(
'#modalTags'
);

const closeBtn=
document.querySelector(
'.modal-close'
);

const modalBg=
document.querySelector(
'.modal-bg'
);


/*========================
影片支援
=========================*/


function renderMedia(data){

if(data.embed){

return`

<iframe
class="embed-video"
src="${data.embed}"
allowfullscreen
frameborder="0">
</iframe>

`;

}


if(data.type==="image"){

return`

<img
class="modal-image-file"
src="${data.media}"
alt="${data.title}">

`;

}

return`

<div class="media-error">

媒體不存在

</div>

`;

}


/*========================
內容
=========================*/


function renderDetail(data){

const contents=data.contents?

`
<div class="modal-section">

<h4>專案內容</h4>

<ul>

${data.contents.map(item=>

`<li>${item}</li>`

).join('')}

</ul>

</div>
`

:'';


const info=data.info?

`
<div class="modal-section">

<h4>專案資訊</h4>

<dl>

${
Object.entries(data.info)

.map(

([key,value])=>

`

<div>

<dt>${key}</dt>

<dd>${value}</dd>

</div>

`

)

.join('')

}

</dl>

</div>

`

:'';


return contents+info;

}


/*========================
開啟
=========================*/


function openModal(key){

const data=
worksData[key];

if(!data)return;

modalMedia.innerHTML=
renderMedia(data);

modalCategory.textContent=
data.category || "";

modalTitle.textContent=
data.title || "";

modalDesc.textContent=
data.desc || "";

modalTags.innerHTML=
renderDetail(data);

modal.classList.add(
'active'
);

document.body.style.overflow=
'hidden';

}


/*========================
關閉
=========================*/


function closeModal(){

modal.classList.remove(
'active'
);

modalMedia.innerHTML="";

document.body.style.overflow="";

}


document.querySelectorAll(
'[data-modal]'
)

.forEach(item=>{

item.addEventListener(
'click',

()=>{

openModal(
item.dataset.modal
);

}

);

});


closeBtn?.addEventListener(
'click',
closeModal
);

modalBg?.addEventListener(
'click',
closeModal
);

document.addEventListener(
'keydown',

e=>{

if(
e.key==="Escape"
){

closeModal();

}

});

});
