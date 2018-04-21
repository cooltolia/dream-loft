;(function () {

    var $hiding = $('.hiding, .showing'),
        $trigger = $('a[href="#description"'),
        $closeDesc = $('.product-page__description-text span');

    $trigger.on('click', function() {
        $hiding.removeClass('hidden')
        if ($hiding.hasClass('hiding')) {
            $hiding.removeClass('hiding');
            $hiding.addClass('showing');
            $trigger.text('Скрыть описание');
        } else {
            $hiding.removeClass('showing');
            $hiding.addClass('hiding');
            $trigger.text('Развернуть описание');
        }
    });

    $closeDesc.on('click', function(e) {
        $hiding.addClass('hiding');
        $hiding.removeClass('showing');
        $trigger.text('Развернуть описание');
    });

})();