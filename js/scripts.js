var main = function() {
  $('.menu').click(function() {
    $('.nav').slideToggle(300);
    $(this).toggleClass('open');
  });
  
  $(function () {
      var string = "Sandcastle";
      var q = jQuery.map(string.split(''), function (letter) {
          return $('<span>' + letter + '</span>');
      });

      var dest = $('#fadeIn');

      var c = 0;
      var i = setInterval(function () {
          q[c].appendTo(dest).hide().fadeIn(500);
          c += 1;
          if (c >= q.length) clearInterval(i);
      }, 225);
  });
}

$(document).ready(main);