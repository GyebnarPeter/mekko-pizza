$('header').load('../includes/header.html', () => {

    $('.header__mobile__nav-open-btn').on('click', function() {
        $('nav').css('right', '0');
    });
    $('.nav__close-btn').on('click', function() {
        $('nav').css('right', '-75%');
    });

});