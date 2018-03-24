(function() {

    var item = $('.product-tabs__tab'),
        content = $('.product-tabs__content'),
        activeItem = $('.product-tabs__tab.active'),
        rel = activeItem.attr('rel');

    $('[data=' + rel + ']').show();

    item.on('click', function(){
        var $this = $(this),
            rel = $this.attr('rel')

        if($this.hasClass('active')) {
            return;
        }
        else {
            item.removeClass('active');
            $this.addClass('active');
            content.hide();
            $('[data=' + rel + ']').show();
        }
    });

}());
