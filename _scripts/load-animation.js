import {TimelineLite} from 'gsap';

var loadAnimation = {
  start: function() {
    var tl = new TimelineLite();
    var coverPage = document.getElementById('cover-page');
    var cards = document.getElementsByClassName('hover-3d');
    var cardsContent = document.getElementsByClassName('hover-3d-content');
    var logo = document.getElementById('logo');

    tl.fromTo(logo, 1.8, {opacity: 0}, {opacity: 1, ease: Linear.easeInOut});
    tl.fromTo(cards, .3, {opacity: 0}, {opacity: 1});
    tl.staggerFromTo(cardsContent, 1, {opacity: 0}, {opacity: 1, ease: Linear.easeInOut}, 0.25);
  }
};

export default loadAnimation;
