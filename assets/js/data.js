/* ============ 內容區：只要改這裡 ============
   src 填圖片路徑（例如 "images/photo/berlin-1.jpg"），留空就顯示彩色塗鴉佔位圖。
   href 可選：旅行卡片點擊後要前往的頁面（例如 "/prague/"）。圖片請先把 HEIC 轉成 JPG。 */
const ITEMS = {
 photo:[
  {zh:"柏林電視塔",en:"Berlin TV Tower",src:""},
  {zh:"街角咖啡",en:"Corner café",src:""},
  {zh:"河岸日落",en:"Sunset by the Spree",src:""},
  {zh:"地鐵站",en:"U-Bahn station",src:""},
  {zh:"秋天的公園",en:"Autumn park",src:""},
  {zh:"夜晚的街",en:"Night street",src:""}
 ],
 trip:[
  {zh:"布拉格",en:"Prague",sub:"4 days 3 nights",src:"",href:""},
  {zh:"伯明罕",en:"Birmingham",src:"",href:""},
  {zh:"倫敦",en:"London",src:"",href:""},
  {zh:"柏林週末",en:"Berlin weekends",src:"",href:""}
 ],
 art:[
  {zh:"我的小房間",en:"My little room",src:""},
  {zh:"麵包與咖啡",en:"Bread & coffee",src:""},
  {zh:"電車",en:"Tram",src:""},
  {zh:"貓咪",en:"A cat",src:""},
  {zh:"行李箱",en:"Suitcase",src:""},
  {zh:"柏林熊",en:"Berlin bear",src:""}
 ]
};
const SITE_TITLE="Somewhere in Berlin";
/* 跟著滑鼠的小圖：填你的插圖路徑（建議透明背景 PNG），留空就是黃色小花 */
const CURSOR_IMG = "images/decor/draw-1.png";// 例如 "images/art/my-flower.png"
/* 首頁會飄浮的插圖：填一到數張，留空就是預設的星星和圓圈 */
const FLOAT_IMGS = ["images/decor/draw-2.png", "images/decor/draw-3.png"];// 例如 ["images/art/star.png","images/art/circle.png"]
/* ============================================ */

