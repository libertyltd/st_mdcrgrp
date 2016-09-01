$(document).ready(function () {
    new Preloader('.preloader');
    new Map('#map');

    /* Плавный скролл к элементу */
    $('header a').bind('click', function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 40}, 800);
        }
        return false;
    });


});