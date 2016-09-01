var Preloader = function (selector) {
    this.$element = $(selector);
    var self = this;

    $(document).ready(function () {
        self.$element.hide('fast', function() {
            self.$element.remove();
            $('body').find('header').show("slow");
            $('body').find('main').show("slow");
            $('body').find('footer').show("slow");
        });
    });
};