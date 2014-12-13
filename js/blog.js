function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#posts_anchor').offset().top;
    if (window_top > div_top) {
        $('#posts').addClass('sticky');
    } else {
        $('#posts').removeClass('sticky');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
