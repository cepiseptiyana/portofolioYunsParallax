let app = new Vue({
  el: "#app",
  data: {
    image: [
      "../public/image/img1.jpeg",
      "../public/image/img2.jpg",
      "../public/image/img3.jpg",
      "../public/image/img4.jpg",
      "../public/image/img5.jpg",
    ],
    textJumbotron: [
      "senam bersama",
      "senam bersama",
      "senam bersama",
      "senam bersama perwosi kab.tangerang",
      "senam bersama",
    ],
    textJumbotronP: [
      "Kegiatan Senam bersama merupakan salah satu kegiatan rutin, yang bertujuan untuk membantu meningkatkan kebugaran jasmani bahkan juga untuk mengkaitkannya dengan rohani, ",
      "kabupaten tangerang,kecamatan sukamulya,desa sukamulya",
      "foto bersama",
      `senam bersama perwosi di kecamatan sukamulya yang dihadiri oleh: <br> 1. h.mochamad maesal rasyid m.si <br> 2. hj.intan nuruh hikmah bba.se`,
      "foto bersama",
    ],
    indexJumbotron: 0,
  },
  methods: {
    slide(index) {
      let img = document.getElementsByClassName("image")[0];
      let textJumboH5 = document.getElementsByClassName("head")[0];
      let textJumboP = document.getElementsByClassName("paragraph1")[0];
      textJumboH5.innerHTML = this.textJumbotron[index];
      textJumboP.innerHTML = this.textJumbotronP[index];
      img.style.backgroundImage = `url(${this.image[index]})`;
      if (index == 1) {
        img.style.backgroundPosition = "center center";
      } else {
        img.style.backgroundPosition = "center center";
      }
    },

    slideLeft() {
      this.indexJumbotron--;
      if (this.indexJumbotron < 0) {
        this.indexJumbotron = this.image.length - 1;
      }
      this.slide(this.indexJumbotron);
    },

    slideRight() {
      this.indexJumbotron++;
      if (this.indexJumbotron > this.image.length - 1) {
        // balikin index 0
        this.indexJumbotron = 0;
      }
      this.slide(this.indexJumbotron);
    },
  },
});
