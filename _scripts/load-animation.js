import {TweenMax, TimelineLite} from 'gsap';

var loadAnimation = {
  start: function() {
    var tl = new TimelineLite();
    var coverPage = document.getElementById('cover-page');
    var cards = document.getElementsByClassName('hover-3d');
    var cardsContent = document.getElementsByClassName('hover-3d-content');
    var logo = document.getElementById('logo');

    tl.staggerFromTo(cards, .5, {opacity: 0}, {opacity: 1}, 0.1)
      .staggerFromTo(cardsContent, .5, {opacity: 0}, {opacity: 1}, 0.1)
      .fromTo(coverPage, .5, {height: 0}, {height: '60vh'})
      .fromTo(logo, .5, {opacity: 0}, {opacity: 1});
  }
};

export default loadAnimation;
