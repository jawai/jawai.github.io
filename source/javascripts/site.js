// This is where it all goes :)
//= require jquery
//= require tree .
$(document).ready(function() {
  (function blink() {
    $('.blink_me').fadeOut(500).fadeIn(500, blink);
  })();
});
