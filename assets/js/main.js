const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const COLORS=["#ffe14d","#5df2c0","#5cc8ff","#ff9b3d","#ffffff"];
let lang="zh";

function ph(i){ // 彩色塗鴉佔位圖
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
 $$("[data-t]").forEach(e=>e.textContent=TEXT[e.dataset.t][l]);
 $$("[data-zh]").forEach(e=>e.textContent=e.dataset[l]);
 $("#lang").textContent=l==="zh"?"EN":"中";
}
function menu(open){
 $("#menu").classList.toggle("open",open);
 $("#burger").classList.toggle("open",open);
 $("#burger").setAttribute("aria-expanded",open);
}
function route(){
 const id=(location.hash||"#home").slice(1);
 const v=$("#"+id)&&$("#"+id).classList.contains("view")?id:"home";
 $$(".view").forEach(s=>s.classList.toggle("on",s.id===v));
 $$("#menu a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+v));
 menu(false); scrollTo(0,0);
}

// 標題
$("#logo").textContent=SITE_TITLE;
$("#bigname").innerHTML=[...SITE_TITLE].map(ch=>ch===" "?" ":`<span>${ch}</span>`).join("");
$("#yr").textContent=new Date().getFullYear();

// 事件
$("#burger").onclick=()=>menu(!$("#menu").classList.contains("open"));
$("#lang").onclick=()=>setLang(lang==="zh"?"en":"zh");
$("#lb").onclick=()=>$("#lb").classList.remove("on");
addEventListener("keydown",e=>{if(e.key==="Escape"){$("#lb").classList.remove("on");menu(false)}});
addEventListener("hashchange",route);
$$("#menu a,.logo").forEach(a=>a.addEventListener("click",()=>{if(a.getAttribute("href")===(location.hash||"#home"))menu(false)}));

// 跟著滑鼠的插圖
if(CURSOR_IMG){
 document.documentElement.classList.add("custom-cursor");
 $("#flower").innerHTML=`<img src="${CURSOR_IMG}" alt="">`;
}
let mx=0,my=0,fx=0,fy=0,moved=false;
addEventListener("mousemove",e=>{
 mx=e.clientX;my=e.clientY;
 if(!moved){moved=true;fx=mx;fy=my;$("#flower").style.opacity=1}
});
(function loop(){
 const h=$("#flower").offsetWidth/2;
 fx+=(mx-fx)*.35;fy+=(my-fy)*.35;
 $("#flower").style.transform=`translate(${fx-h}px,${fy-h}px)`;
 requestAnimationFrame(loop);
})();

// 首頁飄浮的插圖
if(FLOAT_IMGS.length){
 const spots=[["right:4%;top:2%","190px"],["left:50%;bottom:4%","160px"],["left:3%;bottom:8%","140px"],["right:8%;bottom:26%","130px"]];
 FLOAT_IMGS.slice(0,4).forEach((src,i)=>{
  const im=document.createElement("img");
  im.src=src;im.alt="";im.className="doodle";
  im.style.cssText=`${spots[i][0]};width:${spots[i][1]};animation-delay:-${i*1.5}s`;
  $("#home").appendChild(im);
 });
}

build(); setLang("zh"); route();
