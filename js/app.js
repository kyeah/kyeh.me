(function ($, window, undefined) {
    'use strict';

    var $doc = $(document),
    Modernizr = window.Modernizr;

    $(document).ready(function() {
        $('#intro hr').css('width', '100%');
    });

    // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
    if (Modernizr.touch && !window.location.hash) {
        $(window).load(function () {
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 0);
        });
    }

    $(document).ready(function() {
        react_to_window();

        $('.grid').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });

        $('.grid').imagesLoaded().progress( function() {
            $('.grid').masonry('layout');
        });

        
        $('.bot').hover(function() {
            $(this).siblings('.image-link').children('.inner').css('transform', 'rotateY(180deg)');
            $(this).siblings('.image-link').children('.inner').css('transition', '0.3s ease');
        }, function() {
            $(this).siblings('.image-link').children('.inner').css('transform', '');
            $(this).siblings('.image-link').children('.inner').css('transition', '');
        });
    });

    //      only activate stellar for window widths above or equal to 1024
    var stellarActivated = false;

    $(window).resize(function() {
        react_to_window();
    });

    function react_to_window() {
        if ($(window).width() <= 967) {
            if (stellarActivated == true) {
                $(window).data('plugin_stellar').destroy();
                stellarActivated = false;
                $('#hero').removeAttr("style");
            }
        } else {
            if (stellarActivated == false) {

                $.stellar({
                    horizontalScrolling: false,
                    verticalOffset:0
                });

                $(window).data('plugin_stellar').init();
                stellarActivated = true;
            }
        }
    }

})(jQuery, this);
