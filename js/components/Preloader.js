var Preloader = function (selector) {
    this.$element = $(selector);
    var self = this;

    $(document).ready(function () {
        self.$element.animate({
            opacity: 0,
        }, 2000, function () {
            self.$element.remove();
            $('body').find('header').animate({
                opacity: 1,
            }, 500);
            $('body').find('main').animate({
                opacity: 1,
            }, 700);
            $('body').find('footer').animate({
                opacity: 1,
            }, 900);

            $('.window').css({display: 'block'});
            $('.window .close').bind('click', function() {
                $('.window').css({display: 'none'});
                return false;
            });
        });
    });
};