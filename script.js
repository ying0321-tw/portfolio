const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];
function resize(){
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  stars = Array.from({length: Math.min(180, Math.floor(window.innerWidth/8))}, () => ({
    x: Math.random()*window.innerWidth,
    y: Math.random()*window.innerHeight,
    r: Math.random()*1.4+.25,
    a: Math.random()*.75+.2,
    s: Math.random()*.28+.06
  }));
}
function draw(){
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
  for(const p of stars){
    p.y += p.s;
    if(p.y > window.innerHeight) { p.y = -5; p.x = Math.random()*window.innerWidth; }
    ctx.beginPath();
    ctx.fillStyle = `rgba(165,215,255,${p.a})`;
    ctx.shadowColor = '#77ccff';
    ctx.shadowBlur = 8;
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  }
  requestAnimationFrame(draw);
}
window.addEventListener('resize', resize);
resize();
draw();

// after intro, allow UI to be fully interactive
window.addEventListener('load', () => {
  document.body.classList.add('intro-ready');
});
