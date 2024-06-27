$(window).scroll(function () {
  var scroll = $(this).scrollTop();

  $(".navbar-top .line1").css({
    transform: "translate(0px, " + scroll / 1.2 + "%)",
  });
});
