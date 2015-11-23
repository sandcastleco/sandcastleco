function showLinks() {
  var links = document.getElementsByClassName("link");
  TweenMax.staggerFromTo(links, 0.5, {opacity: 0, left: 50}, {opacity: 1, left: 0, ease: Power2.easeOut}, 0.2);
}

window.onload = function() {
  var logo = document.getElementsByClassName("logo");
  TweenLite.fromTo(logo, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeOut, onComplete: showLinks});
}
