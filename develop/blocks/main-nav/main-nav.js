(function () {
    /** main-nav scripts */


    /** mobile-nav scripts */
    var $mobileNav = $('.mobile-nav'),
        $firstLevelLinks = $('.mobile-nav__link'),
        $secondLevelLinks = $('.mobile-nav__sublink');

    $firstLevelLinks.each(function () {
        if ($(this).next('ul').length > 0)
            $(this).addClass('has-submenu');
    })

    $firstLevelLinks.on('click', function (e) {
        var $subMenu = $(this).next();

        if ($subMenu.length > 0) {
            e.preventDefault();
            e.stopPropagation()

            $subMenu.toggleClass('active');
            $(this).addClass('has-submenu');
            $(this).toggleClass('active');

            if ($subMenu.hasClass('active')) {
                $subMenu.slideDown();
            } else {
                $subMenu.slideUp();
            }
        } else {
            return;
        }

    });

    $secondLevelLinks.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation()
        var $thirdMenu = $(this).next();
        $thirdMenu.toggleClass('active')


        if ($thirdMenu.hasClass('active')) {
            $thirdMenu.slideDown();
        } else {
            $thirdMenu.slideUp();
        }
    });
})()