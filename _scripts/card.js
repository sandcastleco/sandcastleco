var movementScale = 5;

function onHover(event) {
  var coords = relativeCoords(event, this);
  var image = this.querySelector('img');
  var xPercent = coords.x / this.offsetWidth;
  var yPercent = coords.y / this.offsetHeight;
  var x = calculatePosition(xPercent + 30, coords.x, this);
  var y = calculatePosition(yPercent + 50, coords.y, this);
  image.style.transform = 'translateY(' + y + 'px) translateX(' + x + 'px) scale3d(1.1, 1.1, 1.1)';
}

function resetHover() {
  var image = this.querySelector('img');
  image.style.transform = 'translateY(0) translateX(0) scale3d(1.0,1.0,1.0)';
}

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

var card = {
  elements: document.getElementsByClassName('hover-3d'),
  init: function() {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener('mousemove', onHover);
      this.elements[i].addEventListener('mouseleave', resetHover);
    }
  }
}

export default card;
