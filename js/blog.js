function current_post_indicator() {
    var window_top = $(window).scrollTop();
    var post_index = 0;
    var posts = $('.post');
    var links = $('.link a');

    var page_bottom = window_top + $(window).height() == $(document).height();

    if(page_bottom) {
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
        $(links[i]).removeClass('menu-active');
        if (i == post_index) {
            $(links[i]).addClass('menu-active');
        }

        if (i == post_index || (i == post_index + 1 && post_index != links.length -1)) {
            var read_ratio = 1;
            if (!page_bottom) {                
                var post_top = $(posts[i]).offset().top - 2;
                var post_bot = $(posts[i]).offset().top + $(posts[i]).height() - 2;
                var top_location = post_top - window_top;
                var bot_location = post_bot - window_top;
                
                var height = $(window).height();
                var top_read_ratio =  1 - (top_location / height);
                if (i == 0) {
                    top_read_ratio = 1;
                }
                var bot_read_ratio = bot_location / height;
                if (i == links.length - 1) {
                    bot_read_ratio = 1;
                }
                console.log(top_read_ratio);
                read_ratio = Math.min(top_read_ratio, bot_read_ratio);
            }
        
            $(links[i]).css({ 'opacity' : Math.max(0.5, read_ratio)});
        } else {
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

function animate_menu() {
    var delay = 0.0;
    $('#posts li').each(function(i) {
        $(this).addClass('animated fadeInDown');
        $(this).css("-webkit-animation-delay", delay + "s");
        $(this).css("animation-delay", delay + "s");
        delay += 0.2;
    });
}

$(function () {
    animate_menu();
    $(window).scroll(on_scroll);
    on_scroll();
});
