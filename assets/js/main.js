const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const COLORS=["#ffe14d","#5df2c0","#5cc8ff","#ff9b3d","#ffffff"];
let lang="zh";

function ph(i){ // 彩色塗鴉佔位圖
 const c=COLORS[i%COLORS.length],d=["M10 70c20-40 30 30 50-10s30 20 40-20","M10 30c20 30 30-30 50 10s30-10 40 30","M15 50c25-35 35 35 55-5s25 15 30-15"][i%3];
 return `<svg viewBox="0 0 120 90" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><rect width="120" height="90" fill="${c}"/><path d="${d}" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/><circle cx="${30+i*13%60}" cy="${22+i*7%20}" r="9" fill="#fff" stroke="#111" stroke-width="3"/></svg>`;
}
const esc=s=>String(s||"").replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
function build(){
 $$(".grid").forEach(g=>{
  g.innerHTML=ITEMS[g.dataset.cat].map((it,i)=>{
   const t=it.src?`<img src="${esc(it.src)}" alt="${esc(it.en)}" loading="lazy">`:ph(i);
   const d=it.desc||{}, hd=it.head||{};
   return `<div class="card" tabindex="0" data-src="${esc(it.src)}" data-href="${esc(it.href)}">
<div class="face"><div class="thumb">${t}</div>
<div class="bar"><i class="dot" style="background:${COLORS[i%COLORS.length]}"></i><span class="ct" data-zh="${esc(it.zh)}" data-en="${esc(it.en)}"></span><span class="tag">${esc(it.tag)}</span></div></div>
<div class="panel"><b class="pt" data-zh="${esc(hd.zh)}" data-en="${esc(hd.en)}"></b><span class="pd" data-zh="${esc(d.zh)}" data-en="${esc(d.en)}"></span></div></div>`;
  }).join("");
 });
 $$(".card").forEach(c=>{
  const go=()=>{
   if(c.dataset.href) location.href=c.dataset.href;
   else if(c.dataset.src){ $("#lb img").src=c.dataset.src; $("#lb").classList.add("on"); }
  };
  c.onclick=go;
  c.onkeydown=e=>{if(e.key==="Enter")go()};
 });
}
function postcard(){ // 翻牌正面的明信片
 const f=$("#postcard");
 if(typeof POSTCARD_IMG!=="undefined"&&POSTCARD_IMG){f.innerHTML=`<img src="${esc(POSTCARD_IMG)}" alt="postcard">`;return}
 f.innerHTML=`<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice"><rect width="300" height="200" fill="#fffaf0"/>
<rect x="8" y="8" width="284" height="184" rx="8" fill="none" stroke="#111" stroke-width="2" stroke-dasharray="6 5"/>
<text x="24" y="70" font-family="Caveat Brush,cursive" font-size="40" fill="#ff6fb1" stroke="#111" stroke-width="1.5" paint-order="stroke">Greetings</text>
<text x="24" y="112" font-family="Caveat Brush,cursive" font-size="40" fill="#5cc8ff" stroke="#111" stroke-width="1.5" paint-order="stroke">from Berlin</text>
<path d="M24 140c20-22 36 18 56-4s34 14 54-6" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
<rect x="228" y="22" width="52" height="64" fill="#ffe14d" stroke="#111" stroke-width="2.5"/><circle cx="254" cy="48" r="11" fill="#fff" stroke="#111" stroke-width="2.5"/><path d="M236 74c6-8 12 6 18-2s12 6 18-2" fill="none" stroke="#111" stroke-width="2.5" stroke-linecap="round"/>
<path d="M206 132h74M206 152h74M206 172h50" stroke="#111" stroke-width="2.5" stroke-linecap="round"/></svg>`;
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

const flip=$("#flip");
flip.onclick=()=>flip.classList.toggle("on");
flip.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flip.classList.toggle("on")}};

build(); postcard(); setLang("zh"); route();
