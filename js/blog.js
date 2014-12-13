function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#posts_anchor').offset().top;
    if (window_top > div_top) {
        $('#posts').addClass('sticky');
        $('#post_menu_header').addClass('animated fadeInDown');
        $('#post_menu_header').removeClass('animated fadeOutUp');
    } else {
        $('#posts').removeClass('sticky');
        $('#post_menu_header').addClass('animated fadeOutUp');
        $('#post_menu_header').removeClass('animated fadeInDown');
    }
}

$(function () {
    var delay = 0.0;
    $('#posts li').each(function(i) {
        $(this).addClass('animated fadeInDown');
        $(this).css("-webkit-animation-delay", delay + "s");
        $(this).css("animation-delay", delay + "s");
        delay += 0.2;
    });
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
