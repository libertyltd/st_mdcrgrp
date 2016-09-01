var Map = function (selector) {
    this.$mapContainer = $(selector);
    this.map = null;
    this.defaultZoom = 16;
    this.defaultCenterMap = [55.772178, 37.662398];
    this.defaultPlacemark = '/css/img/placemark.png';

    var self = this;


    ymaps.ready(function () {
        self.map = new ymaps.Map(self.$mapContainer.attr('id'), {
            center: self.defaultCenterMap,
            zoom: self.defaultZoom,
            controls: []
        });

        var collection = new ymaps.GeoObjectCollection();
        var placemark = new ymaps.Placemark(self.defaultCenterMap, {},
                {
                    iconLayout: 'default#image',
                    iconImageHref: self.defaultPlacemark,
                    iconImageSize: [57, 81],
                    iconImageOffset: [-29, -75],
                    draggable: false
                });
        collection.add(placemark);
        self.map.geoObjects.add(collection);
    });
};
