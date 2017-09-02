import {randScale} from './colors.js';
import loadAnimation from './load-animation.js';
import card from './card.js';

window.onload = function() {

  loadAnimation.start();
  card.init();

}
