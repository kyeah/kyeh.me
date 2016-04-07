(function ($, window, undefined) {
    'use strict';

    var $doc = $(document),
    Modernizr = window.Modernizr;

    $(document).ready(function() {
        $('#intro hr').css('width', '100%');
        $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
        $.fn.foundationButtons          ? $doc.foundationButtons() : null;
        $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
        $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
        $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
        $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
        $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
        $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
        $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
        $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
        $.fn.foundationClearing         ? $doc.foundationClearing() : null;

        $.fn.placeholder                ? $('input, textarea').placeholder() : null;
    });

    //    $doc.foundation();

    $doc.foundation('orbit', {
        animation_speed: 10,
        bullets: false,
    }, function(response){
        console.log(response.errors);
    });

    $doc.foundation('magellan', {
        activeClass: 'active',
    });

    // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
    // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
    // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
    // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
    // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

    // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
    if (Modernizr.touch && !window.location.hash) {
        $(window).load(function () {
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 0);
        });
    }

    jQuery("time.timeago").timeago();

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

    jQuery(function() {
        $(".fancybox").fancybox({
            padding : 0,
            helpers: {
                overlay : {
                    closeClick : true,
                    showEarly : true,
                },
                title : {
                    type : 'float'
                },
                thumbs : {
                    width : 40,
                    height : 40,
                    position : 'top'
                },
                media : {
                    youtube : {
                        params : {
                            autoplay : 0
                        }
                    }
                }
            }
        });
    });

})(jQuery, this);
