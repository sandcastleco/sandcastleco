import {TweenMax, TimelineLite} from 'gsap';
import {randScale} from './colors.js'
import {shuffle, toArray} from './utils.js'

// Animation settings

var movementScale = 5;

// Animation functions

function cardAnimation(event) {
  var coords = relativeCoords(event, this);
  var image = this.querySelector('img');
  var xPercent = coords.x / this.offsetWidth;
  var yPercent = coords.y / this.offsetHeight;
  var x = calculatePosition(xPercent, coords.x, this);
  var y = calculatePosition(yPercent, coords.y, this);
  image.style.transform = 'translateY(' + y + 'px) translateX(' + x + 'px) scale3d(1.1, 1.1, 1.1)';
}

function cardReset() {
  var image = this.querySelector('img');
  image.style.transform = 'translateY(0) translateX(0) scale3d(1.0,1.0,1.0)';
}

// Helper functions

function calculatePosition(percent, coord, element) {
  var subPercent;
  var position;

  if (percent < 0.5) {
    subPercent = 1 - (coord / (element.offsetWidth / 2));
    position = (subPercent * -movementScale);
  } else {
    subPercent = (coord / (element.offsetWidth / 2));
    position = (subPercent * movementScale);
  }
  return position;
}

function relativeCoords(event, element) {
  var bounds = element.getBoundingClientRect();
  var x = event.clientX - bounds.left;
  var y = event.clientY - bounds.top;
  return {x: x, y: y};
}

window.onload = function() {
  var tl = new TimelineLite();
  var coverPage = document.getElementById('cover-page');
  var cards = document.getElementsByClassName('hover-3d');
  var cardsContent = document.getElementsByClassName('hover-3d-content');
  var logo = document.getElementById('logo');
  // fade in cover page and cards
  // after fade, randomly animate card colors
  // settle on final colors
  // fade in logo and icons
  // cards = shuffle(toArray(cards));
  // tl.add(TweenMax.fromTo(coverPage, 1, {
  //   height: '0vh'
  // }, {
  //   height: '0vh'
  // }));
  tl.add(TweenMax.staggerFromTo(cards, .5, {opacity: 0}, {opacity: 1}, 0.1));
  tl.add(TweenMax.staggerFromTo(cardsContent, .5, {opacity: 0}, {opacity: 1}, 0.1));
  tl.add(TweenMax.fromTo(coverPage, .5, {height: 0}, {height: '60vh'}));
  tl.add(TweenMax.fromTo(logo, .5, {opacity: 0}, {opacity: 1}));
  // tl.add(TweenMax.to(cards, .5, {backgroundColor: 'inherit'}));


  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mousemove', cardAnimation);
    cards[i].addEventListener('mouseleave', cardReset);
  }
}
