let image = [
  "publicStyle/image/img1.jpeg",
  "publicStyle/image/img2.jpg",
  "publicStyle/image/img3.jpg",
  "publicStyle/image/img4.jpg",
  "publicStyle/image/img5.jpg",
];

let textJumbotron = [
  "senam bersama",
  "senam bersama",
  "senam bersama",
  "senam bersama perwosi kab.tangerang",
  "senam bersama",
];

let textJumbotronP = [
  "Kegiatan Senam bersama merupakan salah satu kegiatan rutin, yang bertujuan untuk membantu meningkatkan kebugaran jasmani bahkan juga untuk mengkaitkannya dengan rohani, ",
  "kabupaten tangerang,kecamatan sukamulya,desa sukamulya",
  "foto bersama",
  `senam bersama perwosi di kecamatan sukamulya yang dihadiri oleh: <br> 1. h.mochamad maesal rasyid m.si <br> 2. hj.intan nuruh hikmah bba.se`,
  "foto bersama",
];

let left = document.getElementsByClassName("left")[0];
let right = document.getElementsByClassName("right")[0];

function slide(index) {
  let img = document.getElementsByClassName("image")[0];
  let textJumboH5 = document.getElementsByClassName("head")[0];
  let textJumboP = document.getElementsByClassName("paragraph1")[0];
  textJumboH5.innerHTML = textJumbotron[index];
  textJumboP.innerHTML = textJumbotronP[index];
  img.style.backgroundImage = `url(${image[index]})`;
  if (index == 1) {
    img.style.backgroundPosition = "center center";
  } else {
    img.style.backgroundPosition = "center center";
  }
}

let indexJumbotron = 0;

function slideLeft() {
  indexJumbotron--;
  if (indexJumbotron < 0) {
    indexJumbotron = image.length - 1;
  }
  console.log(indexJumbotron);
  slide(indexJumbotron);
}

function slideRight() {
  indexJumbotron++;
  if (indexJumbotron > image.length - 1) {
    // balikin index 0
    indexJumbotron = 0;
  }
  console.log(indexJumbotron);
  slide(indexJumbotron);
}

left.addEventListener("click", function () {
  slideLeft();
});

right.addEventListener("click", function () {
  slideRight();
});
