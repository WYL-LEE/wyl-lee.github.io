/* ============ 內容區：中英文文字、照片、插圖，全部改這個檔案 ============ */

const SITE_TITLE = "Somewhere in Berlin";

/* 網站上的固定文字（選單、標題、介紹）。zh 是中文，en 是英文 */
const TEXT = {
 home:     {zh:"首頁",   en:"Home"},
 about:    {zh:"關於我", en:"About"},
 photo:    {zh:"攝影",   en:"Photos"},
 trip:     {zh:"旅行",   en:"Trips"},
 art:      {zh:"插圖",   en:"Drawings"},
 heroSub:  {zh:"交換學生的日常筆記：用相機、腳步和筆，把在柏林和歐洲各地遇見的東西畫下來。",
            en:"Notes from an exchange year — photos, trips and drawings from Berlin and around Europe."},
 goPhoto:  {zh:"看攝影 →", en:"Photos →"},
 goTrip:   {zh:"看旅行 →", en:"Trips →"},
 goArt:    {zh:"看插圖 →", en:"Drawings →"},
 aboutBody:{zh:"嗨，我是倇瑩，藝術管理背景，2025–2026 在柏林交換。這裡收集我的照片、旅行紀錄與插圖。",
            en:"Hi, I'm Yingying — an arts management student on exchange in Berlin (2025–2026). This is where I keep my photos, travel notes and drawings."}
};

/* 跟著滑鼠的插圖（建議縮成 64～128px 寬的透明背景 PNG），留空就是黃色小花 */
const CURSOR_IMG = "images/decor/draw-1.png";

/* 首頁會飄浮的插圖，最多 4 張，留空就是預設的星星和圓圈 */
const FLOAT_IMGS = ["images/decor/draw-2.png", "images/decor/draw-3.png"];

/* 三個分類的作品。src 填圖片路徑，例如 "images/photo/berlin-1.jpg"，留空會顯示彩色佔位圖。
   href 是旅行卡片要連去的遊記頁面（可留空）。照片請先把 HEIC 轉成 JPG。 */
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
  {zh:"布拉格",en:"Prague",src:"",href:""},
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
