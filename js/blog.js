function current_post_indicator() {
    var window_top = $(window).scrollTop();
    var post_index = 0;
    var posts = $('.post');
    var links = $('.link a');

    if(window_top + $(window).height() == $(document).height()) {
        post_index = links.length - 1;
    } else {
        for (i = 1; i < posts.length; i++) {
            var post_top = $(posts[i]).offset().top - 2;
            if (window_top > post_top) {
                post_index++;
            }
        }
    }
 
    for (i = 0; i < links.length; i++) {
        if (i == post_index) {
            var post_top = $(posts[i]).offset().top - 2;
            var read_location = window_top - post_top;

            var opacity_cutoff = Math.min($(posts[i]).height(), 400);
            var top_read_ratio =  read_location / opacity_cutoff;
            var bot_read_ratio = ($(posts[i]).height() - read_location) / opacity_cutoff;
            var read_ratio = Math.min(top_read_ratio, bot_read_ratio);

            $(links[i]).addClass('menu-active');
            $(links[i]).css({ 'opacity' : Math.max(0.5, read_ratio)});
        } else {
            $(links[i]).removeClass('menu-active');
            $(links[i]).css({ 'opacity' : 0.5});
        }
    }
}

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#posts_anchor').offset().top;
    if (window_top > div_top) {
        $('#posts').addClass('sticky');
    } else {
        $('#posts').removeClass('sticky');
    }
}

function on_scroll() {
    sticky_relocate();
    current_post_indicator();
}

$(function () {
    var delay = 0.0;
    $('#posts li').each(function(i) {
        $(this).addClass('animated fadeInDown');
        $(this).css("-webkit-animation-delay", delay + "s");
        $(this).css("animation-delay", delay + "s");
        delay += 0.2;
    });
    $(window).scroll(on_scroll);
    on_scroll();
});
