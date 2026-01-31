(function ($) {

  "use strict";

    // COLOR MODE
    function setDarkMode(on) {
        if (on) {
            $('#colorToggle').addClass('active').attr('aria-pressed', 'true');
            $('body').addClass('dark-mode');
        } else {
            $('#colorToggle').removeClass('active').attr('aria-pressed', 'false');
            $('body').removeClass('dark-mode');
        }
    }

    // Click handler for toggle
    $(document).on('click', '#colorToggle', function(){
        var next = !$('body').hasClass('dark-mode');
        setDarkMode(next);
        try { localStorage.setItem('darkMode', next ? 'on' : 'off'); } catch (e) {}
    });

    // Initialize from localStorage
    $(function() {
        try {
            var stored = localStorage.getItem('darkMode');
            if (stored === 'on') setDarkMode(true);
            else if (stored === 'off') setDarkMode(false);
        } catch (e) {}
    });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
