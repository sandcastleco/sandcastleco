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
    links[i].addEventListener("click", function() {
      heading.innerHTML = this.dataset.heading;
      var color = this.dataset.color;
      section[1].style.display = "block";
      TweenLite.to(section[0], 1, {height: "60vh"});
      TweenLite.to(section[1], 1, {opacity: 1, height: "40vh", backgroundColor: color, ease: Power2.easeOut});
      TweenLite.to(button, 0.3, {color: color});
    });
  }


  /*body.addEventListener("click", function() {
    canvas.innerHTML += '<div class="bubble"></div>';
  });*/
}
