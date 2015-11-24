function showLinks() {
  var links = document.getElementsByClassName("link");
  TweenMax.staggerFromTo(links, 0.5, {opacity: 0, left: 50}, {opacity: 1, left: 0, ease: Power2.easeOut}, 0.2);
}

window.onload = function() {
  var body = document.getElementById("body");
  var links = document.getElementsByClassName("link");
  var section = document.getElementsByClassName("section");
  var flag = document.getElementById("flag");
  var canvas = document.getElementById("canvas");
  var logo = document.getElementsByClassName("logo");
  var button = document.getElementById("button");
  var heading = document.getElementById("heading");

  TweenLite.fromTo(logo, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeOut, onComplete: showLinks});

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      heading.innerHTML = this.dataset.heading;
      var color = this.dataset.color;
      section[1].style.display = "block";
      for (var j = 0; j < links.length; j++) {
        links[j].className = "link col-md-4";
      }
      this.className += " on";
      TweenLite.to(flag, 1, {fill: color});
      TweenLite.to(".social", 1, {autoAlpha: 1});
      TweenLite.to(".social-link", 1, {color: color});
      TweenLite.to(section[0], 1, {height: "60vh", force3D:true, ease: Power2.easeOut});
      TweenLite.to(section[1], 1, {autoAlpha: 1, force3D:true, height: "40vh", backgroundColor: color, ease: Power2.easeOut});
      TweenLite.to(button, 0.3, {color: color});
    });
  }


  /*body.addEventListener("click", function() {
    canvas.innerHTML += '<div class="bubble"></div>';
  });*/
}
