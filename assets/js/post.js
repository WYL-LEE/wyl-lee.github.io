/* 遊記頁面（trips/ 裡的 .html）共用的小功能：選單＋跟著滑鼠的插圖。一般不用改 */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$("#logo").textContent=SITE_TITLE;
$$("[data-t]").forEach(e=>e.textContent=TEXT[e.dataset.t].zh);

function menu(open){
 $("#menu").classList.toggle("open",open);
 $("#burger").classList.toggle("open",open);
 $("#burger").setAttribute("aria-expanded",open);
}
$("#burger").onclick=()=>menu(!$("#menu").classList.contains("open"));
addEventListener("keydown",e=>{if(e.key==="Escape")menu(false)});

// 跟著滑鼠的插圖（路徑前面補 ../ 因為這頁在 trips 資料夾裡）
if(CURSOR_IMG){
 document.documentElement.classList.add("custom-cursor");
 $("#flower").innerHTML=`<img src="../${CURSOR_IMG}" alt="">`;
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
