var main = function() {
  $('.menu').click(function() {
    $('.nav').slideToggle(300);
    $(this).toggleClass('open');
  });
}

$(document).ready(main);