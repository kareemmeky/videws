// ========== Navbar Toggle ==========
const menu = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
};

// ========== Image Sections ==========
const im1 = document.querySelector(".im1");
const im2 = document.querySelector(".im2");


 function fun1() {
  let arr1 = [
  "image/A_Fish_Tale.jpg", "image/the_batman.jpg","image/The_Clearing.jpg","image/The_Nanny's_Night.jpg",
  "image/The_Skeleton's_Compass.jpg","image/thor.jpg","image/background.png","image/Church_Girl.jpg",
  "image/Erzulie.jpg", "image/Top_Gun.jpg","image/Turbo_Cola.jpg","image/Minions.webp",
  "image/Motorkite_Dreaming.jpg","image/Root_of_the_Problem.png","image/Shotgun.jpg", "image/Shaun_of_the_Dead.jpg"];

let arrStar1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐','⭐⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐','⭐⭐⭐','⭐⭐⭐⭐⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐','⭐⭐','⭐⭐⭐'];
let arrDeg1 = [4,1.4,5,3.5,2.5,1,0.5,4,3,2,1.3,7,5.5,6,4.8,3.9,8];
let arrNeme1 = [
  "A Fish Tale","The Batman","The Clearing","The Nanny's Night","The Skeleton's Compass","Thor",
  "Background","Church Girl","Erzulie","Top Gun","Turbo Cola","Minions",
  "Motorkite Dreaming","Root of the Problem","Shotgun","Terror Trips","Shaun of the Dead"
];
let arrAge = [2020,2012,2019,2025,2024,2005,2006,2016,2015,2018,2000,2023,2021,2017,2014,2011,2009];

  for (let i = 0; i < arr1.length; i++) {
  im1.innerHTML += `
    <div class="movie-card">
      <img src="${arr1[i]}" alt="${arrNeme1[i]}">
      <div class="text">
        <p>${arrStar1[i]}</p>
        <h3>${arrDeg1[i]}/10</h3>
        <h3>${arrNeme1[i]}</h3>
        <button>Watch</button>
        <div>
         
        </div>
      </div>
        <div class="movie-cardend">
       <p>Year</p>
          <p>${arrAge[i]}</p>
        </div>
     
    </div>
  `;
}
 }

 fun1();

// -------- Array 2 --------

function fun2() {
  
let arr2 = [
 "image/add_1.jpeg","image/add_2.jpeg","image/add_3.jpeg","image/add_4.jpeg"
];


let arrPrs2=[200,400,500,100,440]
let arrNam2 = [
  "Canvas bag", 
  "Leather bag", 
  "Sports sneakers", 
  "Smart watch", 
  "Grilled kebab"
];

let arrDescriptions = [
  "modern stylish design premium quality durable lightweight comfortable elegant smooth finish fashion",
  "classic vintage look handmade crafted versatile unique trendy strong build perfect choice",
  "sporty active performance breathable flexible sleek dynamic durable everyday essential comfortable",
  "luxury premium edition high quality refined elegant sophisticated exclusive modern stylish durable"
];

// -------- عرض صور arr2 داخل im2 --------
for (let i = 0; i < arr2.length; i++) {
  im2.innerHTML += `
    <div class="movie-card2">
      <img src="${arr2[i]}" alt="Product ${i+1}">
      <div class="text2">
        <p>${arrNam2[i]}</p>
        <h3>${arrPrs2[i]}$</h3>
      
        <div>
        
        </div>
      </div>
           <h6> ${arrDescriptions[i]}</h6>
    </div>
  `;
}

  
}
fun2()
let sbacheal_Mneow=document.querySelector(".sbacheal_Mneow")
let sbachea2_Mneow=document.querySelector(".sbachea2_Mneow")
let section2_MneowMotagat=document.querySelector(".section2_MneowMotagat")
// !!!!!!!!!!!!!!!!!11

function fun3(){
  let arrImg3=["image2/images (1).jpg","image2/تنزيل (1).jpg","image2/تنزيل (2).jpg","image2/تنزيل (3).jpg","image2/تنزيل (4).jpg","image2/تنزيل (5).jpg","image2/تنزيل (6).jpg","image2/تنزيل (7).jpg","image2/تنزيل (8).jpg","image2/تنزيل (9).jpg","image2/تنزيل.jpg"]

let arrStar1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐','⭐⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐','⭐⭐⭐','⭐⭐⭐⭐⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐','⭐⭐','⭐⭐⭐'];
let arrDeg1 = [4,1.4,5,3.5,2.5,1,0.5,4,3,2,1.3,7,5.5,6,4.8,3.9,8];
let arrNeme1 = [
  "A Fish Tale","The Batman","The Clearing","The Nanny's Night","The Skeleton's Compass","Thor",
  "Background","Church Girl","Erzulie","Top Gun","Turbo Cola","Minions",
  "Motorkite Dreaming","Root of the Problem","Shotgun","Terror Trips","Shaun of the Dead"
];
let arrAge = [2020,2012,2019,2025,2024,2005,2006,2016,2015,2018,2000,2023,2021,2017,2014,2011,2009];

for (let i = 0; i < arrImg3.length; i++) {
  
  sbacheal_Mneow.innerHTML += `
    <div class="movie-card">
      <img src="${arrImg3[i]}" alt="${arrNeme1[i]}">
      <div class="text">
        <p>${arrStar1[i]}</p>
        <h3>${arrDeg1[i]}/10</h3>
        <h3>${arrNeme1[i]}</h3>
        <button>Watch</button>
        <div>
         
        </div>
      </div>
        <div class="movie-cardend">
       <p>Year</p>
          <p>${arrAge[i]}</p>
        </div>
     
    </div>
  `;
}
}
fun3();
// !!!!!!!!!!!!\\

function fun4(){
  let arrImg4=["image3/images (1).jpg","image3/images (3).jpg","image3/تنزيل (1).jpg","image3/تنزيل (2).jpg","image3/تنزيل (3).jpg","image3/تنزيل (4).jpg","image3/تنزيل (5).jpg","image3/تنزيل (7).jpg","image3/تنزيل (8).jpg","image3/تنزيل (9).jpg","image3/تنزيل.jpg"]                                                

  
let arrStar1 = ['⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐','⭐⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐','⭐⭐⭐','⭐⭐⭐⭐⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐','⭐⭐','⭐⭐⭐'];
let arrDeg1 = [4,1.4,5,3.5,2.5,1,0.5,4,3,2,1.3,7,5.5,6,4.8,3.9,8];
let arrNeme1 = [
  "A Fish Tale","The Batman","The Clearing","The Nanny's Night","The Skeleton's Compass","Thor",
  "Background","Church Girl","Erzulie","Top Gun","Turbo Cola","Minions",
  "Motorkite Dreaming","Root of the Problem","Shotgun","Terror Trips","Shaun of the Dead"
];
let arrAge = [2020,2012,2019,2025,2024,2005,2006,2016,2015,2018,2000,2023,2021,2017,2014,2011,2009];

for (let i = 0; i < arrImg4.length; i++) {
  
  sbachea2_Mneow.innerHTML += `
    <div class="movie-card">
      <img src="${arrImg4[i]}" alt="${arrNeme1[i]}">
      <div class="text">
        <p>${arrStar1[i]}</p>
        <h3>${arrDeg1[i]}/10</h3>
        <h3>${arrNeme1[i]}</h3>
        <button>Watch</button>
        <div>
         
        </div>
      </div>
        <div class="movie-cardend">
       <p>Year</p>
          <p>${arrAge[i]}</p>
        </div>
     
    </div>
  `;
}

}
fun4()

function fun5() {
  const gameImages = [
    "imgag4/images (1).jpg",
    "imgag4/images (2).jpg",
    "imgag4/images.jpg",
    "imgag4/تنزيل (1).jpg",
    "imgag4/تنزيل (2).jpg",
    "imgag4/تنزيل (3).jpg",
    "imgag4/تنزيل (4).jpg",
    "imgag4/تنزيل (5).jpg",
    "imgag4/تنزيل (6).jpg",
    "imgag4/تنزيل (7).jpg",
    "imgag4/تنزيل.jpg"
  ];

  let arrPrs2 = [20, 40, 50, 10, 40];
  let arrNam2 = ["Canvas bag", "Leather bag", "Sports sneakers", "Smart watch", "Grilled kebab"];
  let arrDescriptions = [
    "modern stylish design premium quality durable lightweight comfortable elegant smooth finish fashion",
    "classic vintage look handmade crafted versatile unique trendy strong build perfect choice",
    "sporty active performance breathable flexible sleek dynamic durable everyday essential comfortable",
    "luxury premium edition high quality refined elegant sophisticated exclusive modern stylish durable"
  ];

  // -------- عرض الصور داخل section2_MneowMotagat --------
  for (let i = 0; i < gameImages.length; i++) {
    section2_MneowMotagat.innerHTML += `
      <div class="movie-card3">
        <img src="${gameImages[i]}" alt="Product ${i+1}">
        <div class="text2">
          <p>${arrNam2[i % arrNam2.length]}</p>
          <h3>${arrPrs2[i % arrPrs2.length]}$</h3>
        </div>
        <h6>${arrDescriptions[i % arrDescriptions.length]}</h6>
      </div>
    `;
  }
}

fun5();
 


// !!!!!!!!!!!!!!!!!!!1

// بعد ما تعمل fun1, fun3, fun4
function addYouTubeButtonClick(selector) {
  const buttons = document.querySelectorAll(selector + ' .text button');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // تمنع الضغط من التأثير على الكرت نفسه
      window.open('https://www.youtube.com', '_blank'); // يفتح يوتيوب
    });
  });
}

// تطبيق على كل الأقسام المطلوبة
addYouTubeButtonClick('.im1');             // fun1
addYouTubeButtonClick('.sbacheal_Mneow');  // fun3
addYouTubeButtonClick('.sbachea2_Mneow');  // fun4
// !!!!!!11

// اضغط على أي كرت في im2 يفتح أمازون
function addAmazonCardClick() {
  const cards = document.querySelectorAll('.im2 .movie-card2');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      window.open('https://www.amazon.com', '_blank');
    });
  });
}

// استدعاء الفنكشن بعد عرض الكروت
addAmazonCardClick();

// !!!!!!!
// زر الكرت أو الكرت نفسه يفتح ج

function addPlayStoreClick() {
  const cards = document.querySelectorAll('.section2_MneowMotagat .movie-card3');

  cards.forEach(card => {
    // لو دوس على الكرت نفسه
    card.addEventListener('click', () => {
      window.open('https://play.google.com/store', '_blank');
    });

    // لو فيه زر جوه الكرت
    const btn = card.querySelector('button');
    if(btn){
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // تمنع الضغط من فتح الكرت مرتين
        window.open('https://play.google.com/store', '_blank');
      });
    }
  });
}

// استدعاء الفنكشن بعد عرض الكروت
addPlayStoreClick();
