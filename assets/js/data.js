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
            en:"Hi, I'm Yingying — an arts management student on exchange in Berlin (2025–2026). This is where I keep my photos, travel notes and drawings."},
 flipHint: {zh:"👆 點一下明信片翻面", en:"👆 Tap the postcard to flip"},
 /* 翻牌背面的長段落介紹：把你的文字貼在引號裡，想分段就空一行 */
 intro:    {zh:"（把你的長段落介紹貼在這裡。）\n\n嗨，我是倇瑩，藝術管理背景，2025–2026 在柏林交換。這張明信片的背面，我想寫下這一年的故事：為什麼出發、遇見了什麼、帶回來什麼。\n\n想分段的話，在兩段中間空一行就可以。",
            en:"(Paste your long introduction here.)\n\nHi, I'm Yingying, an arts management student on exchange in Berlin (2025–2026). On the back of this postcard I want to tell the story of this year.\n\nLeave an empty line between paragraphs."}
};

/* 首頁翻牌正面的明信片照片（之後換成你的明信片）。留空就顯示一張範例明信片 */
const POSTCARD_IMG = "";   // 例如 "images/decor/postcard.jpg"

/* 跟著滑鼠的插圖（建議縮成 64～128px 寬的透明背景 PNG），留空就是黃色小花 */
const CURSOR_IMG = "images/decor/draw-1.png";

/* 首頁會飄浮的插圖，最多 4 張，留空就是預設的星星和圓圈 */
const FLOAT_IMGS = ["images/decor/draw-2.png", "images/decor/draw-3.png"];

/* 三個分類的作品。
   zh / en：卡片下方的標題；tag：標題右邊的小字（日期、地點都可以）
   head：滑過去跳出來的粗體小標（可留空）；desc：介紹文字
   src：圖片路徑，例如 "images/photo/berlin-1.jpg"，留空會顯示彩色佔位圖
   href：旅行卡片要連去的遊記頁面（可留空）。照片請先把 HEIC 轉成 JPG。 */
const ITEMS = {
 photo:[
  {zh:"柏林電視塔",en:"Berlin TV Tower",tag:"Berlin",src:"",desc:{zh:"在這裡寫一兩句這張照片的故事。",en:"A sentence or two about this photo."}},
  {zh:"街角咖啡",en:"Corner café",tag:"Berlin",src:"",desc:{zh:"在這裡寫一兩句這張照片的故事。",en:"A sentence or two about this photo."}},
  {zh:"河岸日落",en:"Sunset by the Spree",tag:"Berlin",src:"",desc:{zh:"在這裡寫一兩句這張照片的故事。",en:"A sentence or two about this photo."}},
  {zh:"地鐵站",en:"U-Bahn station",tag:"Berlin",src:"",desc:{zh:"在這裡寫一兩句這張照片的故事。",en:"A sentence or two about this photo."}},
  {zh:"秋天的公園",en:"Autumn park",tag:"Berlin",src:"",desc:{zh:"在這裡寫一兩句這張照片的故事。",en:"A sentence or two about this photo."}},
  {zh:"夜晚的街",en:"Night street",tag:"Berlin",src:"",desc:{zh:"在這裡寫一兩句這張照片的故事。",en:"A sentence or two about this photo."}}
 ],
 trip:[
  {zh:"布拉格",en:"Prague",tag:"2025.10",src:"images/trip/prague-cover",href:"trips/prague.html",
   head:{zh:"捷克 · 三天兩夜",en:"Czechia · 3 days"},desc:{zh:"查理大橋、天文鐘、卡夫卡博物館，還有一家超級漂亮的木偶店。",en:"Charles Bridge, the astronomical clock, the Kafka Museum, and a gorgeous puppet shop."}},
  {zh:"伯明罕",en:"Birmingham",tag:"",src:"",href:"",desc:{zh:"在這裡寫一兩句這趟旅行的故事。",en:"A sentence or two about this trip."}},
  {zh:"倫敦",en:"London",tag:"",src:"",href:"",desc:{zh:"在這裡寫一兩句這趟旅行的故事。",en:"A sentence or two about this trip."}},
  {zh:"柏林週末",en:"Berlin weekends",tag:"",src:"",href:"",desc:{zh:"在這裡寫一兩句這趟旅行的故事。",en:"A sentence or two about this trip."}}
 ],
 art:[
  {zh:"我的小房間",en:"My little room",tag:"",src:"",desc:{zh:"在這裡寫一兩句這張插圖的故事。",en:"A sentence or two about this drawing."}},
  {zh:"麵包與咖啡",en:"Bread & coffee",tag:"",src:"",desc:{zh:"在這裡寫一兩句這張插圖的故事。",en:"A sentence or two about this drawing."}},
  {zh:"電車",en:"Tram",tag:"",src:"",desc:{zh:"在這裡寫一兩句這張插圖的故事。",en:"A sentence or two about this drawing."}},
  {zh:"貓咪",en:"A cat",tag:"",src:"",desc:{zh:"在這裡寫一兩句這張插圖的故事。",en:"A sentence or two about this drawing."}},
  {zh:"行李箱",en:"Suitcase",tag:"",src:"",desc:{zh:"在這裡寫一兩句這張插圖的故事。",en:"A sentence or two about this drawing."}},
  {zh:"柏林熊",en:"Berlin bear",tag:"",src:"",desc:{zh:"在這裡寫一兩句這張插圖的故事。",en:"A sentence or two about this drawing."}}
 ]
};
