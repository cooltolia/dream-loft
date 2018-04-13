;(function () {

    var  $animatable = $('.animatable'),
         $trigger = $('a[href="#description"');

    $trigger.on('click', function() {

        if ($animatable.hasClass('animatable')) {
            $animatable.addClass('animated');
            $animatable.removeClass('animatable');
            $trigger.text('Скрыть описание');
        } else {
            $animatable.addClass('animatable');
            $animatable.removeClass('animated');
            $trigger.text('Развернуть описание');
        }
    });

})();