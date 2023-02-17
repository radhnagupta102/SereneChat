// Code for scrolling to the next section when the "Sign Up Now" button is clicked
$(document).ready(function() {
    $('.btn-primary').click(function() {
      $('html, body').animate({
        scrollTop: $('.signup-sec').offset().top
      }, 1000);
    });
} );
