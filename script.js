document.addEventListener('DOMContentLoaded',()=>{

const revealTargets=document.querySelectorAll(
'.reveal-text,.section-title,.about-photo,.about-copy,.work-card,.contact-title,.contact-info'
);

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('is-visible');
}
});
},{threshold:.15});

revealTargets.forEach(item=>observer.observe(item));


const filterButtons=document.querySelectorAll(
'.filter-nav button,.floating-work-filter button'
);

const workCards=document.querySelectorAll(
'.work-grid .work-card'
);

function applyWorkFilter(filter){

filterButtons.forEach(btn=>{

btn.classList.toggle(
'active',
btn.dataset.filter===filter
);

});

workCards.forEach(card=>{

const category=card.dataset.category;

if(
filter==='all'
||
category===filter
){

card.classList.remove('hide');

}else{

card.classList.add('hide');

}

});

}

filterButtons.forEach(button=>{

button.addEventListener('click',()=>{

applyWorkFilter(
button.dataset.filter
);

});

});


/* 懸浮分類 */

const floatingFilter=
document.querySelector(
'#floatingWorkFilter'
);

const featuredSlider=
document.querySelector(
'.featured-slider'
);

function toggleFloatingFilter(){

if(
!floatingFilter
||
!featuredSlider
)return;

const sliderBottom=
featuredSlider
.getBoundingClientRect()
.bottom;

if(
sliderBottom<=0
){

floatingFilter.classList.add(
'show'
);

}else{

floatingFilter.classList.remove(
'show'
);

}

}

window.addEventListener(
'scroll',
toggleFloatingFilter
);

toggleFloatingFilter();



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


/* 修正影片連結 */

const worksData={

video1:{
category:'短影片',
title:'AED',
link:'https://youtu.be/yR1RM2RJkBk',
contents:['腳本','拍攝','剪輯']
},

video3:{
category:'短影片',
title:'特攝系列',
link:'https://youtu.be/qUu6v1Oc0Js'
},

video4:{
category:'短影片',
title:'ICE',
link:'https://youtu.be/d3u5aKXNcO0'
},

video5:{
category:'短影片',
title:'鬼娃恰吉',
link:'https://youtu.be/Y10-U7yfRO4'
}

};


function renderMedia(data){

if(data.link){

return`

<div class="external-video-box">

<p>
此作品影片請至外部平台觀看
</p>

<a
href="${data.link}"
target="_blank">

開啟影片

</a>

</div>

`;

}

return`

<div class="media-error">

尚未設定媒體

</div>

`;

}



function renderDetail(data){

const contents=data.contents?

`

<div class="modal-section">

<h4>
專案內容
</h4>

<ul>

${data.contents
.map(item=>`<li>${item}</li>`)
.join('')
}

</ul>

</div>

`

:'';

return contents;

}



function openModal(key){

const data=
worksData[key];

if(!data)return;

modalMedia.innerHTML=
renderMedia(data);

modalCategory.textContent=
data.category||'';

modalTitle.textContent=
data.title||'';

modalDesc.textContent=
data.desc||'';

modalTags.innerHTML=
renderDetail(data);

modal.classList.add(
'active'
);

document.body.style.overflow=
'hidden';

}


function closeModal(){

modal.classList.remove(
'active'
);

document.body.style.overflow='';

}



document
.querySelectorAll(
'[data-modal]'
)
.forEach(item=>{

item.addEventListener(
'click',
()=>{

openModal(
item.dataset.modal
);

});

});


closeBtn?.addEventListener(
'click',
closeModal
);

modalBg?.addEventListener(
'click',
closeModal
);

});
