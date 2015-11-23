function showLinks() {
  var links = document.getElementsByClassName("link");
  TweenMax.staggerFromTo(links, 0.5, {opacity: 0, left: 50}, {opacity: 1, left: 0, ease: Power2.easeOut}, 0.2);
}

window.onload = function() {
  var body = document.getElementById("body");
  var links = document.getElementsByClassName("link");
  var falt = document.getElementById("flag");
  var canvas = document.getElementById("canvas");
  var logo = document.getElementsByClassName("logo");

  TweenLite.fromTo(logo, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeOut, onComplete: showLinks});

  links[0].addEventListener("mouseover", function() {
    TweenLite.to(flag, 0.3, {fill: "#D9482B"});
  });
  links[1].addEventListener("mouseover", function() {
    TweenLite.to(flag, 0.3, {fill: "#30A7BF"});
  });
  links[2].addEventListener("mouseover", function() {
    TweenLite.to(flag, 0.3, {fill: "#53A668"});
  });
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseout", function() {
      TweenLite.to(flag, 0.3, {fill: "#FFF"});
    });
  }


  /*body.addEventListener("click", function() {
    canvas.innerHTML += '<div class="bubble"></div>';
  });*/
}
