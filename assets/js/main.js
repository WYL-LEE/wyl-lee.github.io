const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const COLORS=["#ffd400","#ff9fb5","#9fe3c8","#b9d4ff","#ffc58a"];
let lang="zh";

function ph(i){ // 塗鴉佔位圖
 const c=COLORS[i%COLORS.length],d=["M10 70c20-40 30 30 50-10s30 20 40-20","M10 30c20 30 30-30 50 10s30-10 40 30","M15 50c25-35 35 35 55-5s25 15 30-15"][i%3];
 return `<svg viewBox="0 0 120 90" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><rect width="120" height="90" fill="${c}"/><path d="${d}" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/><circle cx="${30+i*13%60}" cy="${22+i*7%20}" r="9" fill="#fff" stroke="#111" stroke-width="3"/></svg>`;
}
function build(){
 $$(".grid").forEach(g=>{
  g.innerHTML=ITEMS[g.dataset.cat].map((it,i)=>{
   const t=it.src?`<img src="${it.src}" alt="${it.en}" loading="lazy">`:ph(i);
   return `<div class="card" data-src="${it.src||""}" data-href="${it.href||""}"><div class="thumb">${t}</div><div class="cap" data-zh="${it.zh}" data-en="${it.en}"></div></div>`;
  }).join("");
 });
 $$(".card").forEach(c=>c.onclick=()=>{
  if(c.dataset.href) location.href=c.dataset.href;
  else if(c.dataset.src){ $("#lb img").src=c.dataset.src; $("#lb").classList.add("on"); }
 });
}
function setLang(l){
 lang=l; document.documentElement.lang=l==="zh"?"zh-Hant":"en";
 $$("[data-zh]").forEach(e=>e.textContent=e.dataset[l]);
 $("#lang").textContent=l==="zh"?"EN":"中";
 $("#bigname").innerHTML=[...SITE_TITLE].map(ch=>ch===" "?" ":`<span>${ch}</span>`).join("");
}
function route(){
 const id=(location.hash||"#home").slice(1);
 const v=$("#"+id)&&$("#"+id).classList.contains("view")?id:"home";
 $$(".view").forEach(s=>s.classList.toggle("on",s.id===v));
 $$("header nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+v));
 scrollTo(0,0);
}
$("#lang").onclick=()=>setLang(lang==="zh"?"en":"zh");
$("#lb").onclick=()=>$("#lb").classList.remove("on");
addEventListener("keydown",e=>{if(e.key==="Escape")$("#lb").classList.remove("on")});
addEventListener("hashchange",route);
$("#yr").textContent=new Date().getFullYear();

// 跟著滑鼠慢慢飄的黃色小花
let mx=innerWidth/2,my=innerHeight/2,fx=mx,fy=my;
addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
(function loop(){fx+=(mx-fx)*.08;fy+=(my-fy)*.08;
 $("#flower").style.transform=`translate(${fx+14}px,${fy+14}px)`;requestAnimationFrame(loop)})();

if(CURSOR_IMG){
 $("#flower").innerHTML=`<img src="${CURSOR_IMG}" alt="" style="width:100%;display:block">`;
}
if(FLOAT_IMGS.length){
 $$("#home .doodle").forEach(d=>d.remove());
 const spots=[["right:4%;top:2%","150px"],["left:46%;bottom:6%","120px"],["left:4%;bottom:10%","110px"],["right:10%;bottom:20%","100px"]];
 FLOAT_IMGS.slice(0,4).forEach((src,i)=>{
  const im=document.createElement("img");
  im.src=src;im.alt="";im.className="doodle";
  im.style.cssText=`${spots[i][0]};width:${spots[i][1]};animation-delay:-${i*1.5}s`;
  $("#home").appendChild(im);
 });
}

build(); setLang("zh"); route();

// 把滑鼠游標換成自己的插圖
const REAL_CURSOR_IMG = "images/decor/cursor.png";
if (REAL_CURSOR_IMG) {
  const st = document.createElement("style");
  st.textContent = `html,body,a,button,.card,#lb{cursor:url("${REAL_CURSOR_IMG}") 0 0, auto !important}`;
  document.head.appendChild(st);
  document.querySelector("#flower").style.display = "none";
}
