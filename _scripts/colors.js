module.exports = {
  grayscale: function(scale) {
    return 'rgba(0,0,0,' + scale + ')';
  },
  randScale: function(r,g,b) {
    var opacity = Math.random() * (.7 - .3) + .3;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
}
