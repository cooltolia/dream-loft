;
(function () {

    var $mobileNav = $('.mobile-nav'),
        $allSubMenus = $('.mobile-nav__submenu, .mobile-nav__thirdmenu');
        
        
    $(".hamburger").click(function () {
        /** hide all visible inner menus */
        $allSubMenus.removeClass('active');
        $allSubMenus.slideUp();

        $(this).toggleClass('active');
        $mobileNav.toggleClass('active')

        if ($mobileNav.hasClass('active')) {
            $mobileNav.fadeIn();
        } else {
            $mobileNav.fadeOut();
        }
    });

})();
