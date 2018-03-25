(function() {

    $('.product-slider__main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.product-slider__thumbs'
    });

    $('.product-slider__thumbs').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.product-slider__main',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });


    $('.zoom').zoom({
        
    });

}());