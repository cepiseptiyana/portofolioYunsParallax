function lightbox() {
  let jumbo = document.getElementsByClassName("jumbo")[0];
  let imgLight = document.getElementsByClassName("imgLight")[0];
  window.addEventListener("click", function (e) {
    if (e.target.className === "thumb") {
      jumbo.src = e.target.src;
      imgLight.style.display = "flex";
    }
    if (e.target.className === "closeImg") {
      imgLight.style.display = "none";
    }
  });
}

lightbox();
