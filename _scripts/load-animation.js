import {TimelineLite} from 'gsap';

var loadAnimation = {
  start: function() {
    var tl = new TimelineLite();
    var coverPage = document.getElementById('cover-page');
    var cards = document.getElementsByClassName('hover-3d');
    var cardsContent = document.getElementsByClassName('hover-3d-content');
    var logo = document.getElementById('logo');

    tl.fromTo(logo, 0.8, {opacity: 0}, {opacity: 1, ease: Linear.easeInOut}, 0.2);
    tl.fromTo(cards, .2, {opacity: 0}, {opacity: 1}, 0.8);
    tl.staggerFromTo(cardsContent, 0.8, {opacity: 0}, {opacity: 1, ease: Linear.easeInOut}, 0.15);
  }
};

export default loadAnimation;
