(function() {

    var $grid = $('.index-catalog__grid').imagesLoaded(function () {
        // init Masonry after all images have loaded
        console.log('есть картинки');
        if ($(window).width() < 480) return;

        $grid.masonry({
            itemSelector: '.index-catalog__item',
            columnWidth: 300,
            gutter: 5,
        });
    });

}());
