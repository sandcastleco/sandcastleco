$(document).ready(function() {

  var $body = $('body');
  var $button = $('.menu-button');
  var $buttonShape = $('.menu-button-shape');
  var $nav = $('.navigation');
  var navHeight = $nav.outerHeight();

  function showNav() {
    $body.css('padding-bottom', navHeight + 'px');
    $nav.css('bottom', 0);
  };

  function hideNav() {
    $body.css('padding-bottom', 0);
    $nav.css('bottom', -navHeight + 'px');
  };

  hideNav();

  $button.click(function() {
    $buttonShape.toggleClass('open');
    if ($nav.hasClass('open')) {
      hideNav();
    } else {
      showNav();
    }
    $nav.toggleClass('open');
  });
});
