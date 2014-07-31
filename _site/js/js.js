/*
* Uses jQuery!!!!111one
*/


/*====================================
=            ON DOM READY            =
====================================*/
$(function() {

    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });


});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('.site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('.site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('.site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 1500);
        return false;
      }
    }
  });
});
