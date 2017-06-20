// This is where it all goes :)
//= require jquery
//= require tree .
$(document).ready(function() {
  (function blink() {
    $('.blink_me').fadeOut(500).fadeIn(500, blink);
  })();
});

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.9";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
