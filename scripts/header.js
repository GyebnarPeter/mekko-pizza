/* $('header').load('../includes/header.html', () => {

    $('.header__mobile__nav-open-btn').on('click', function() {
        $('nav').css('right', '0');
    });
    $('.nav__close-btn').on('click', function() {
        $('nav').css('right', '-75%');
    });

    let nav = document.querySelector('nav');
    window.onscroll = () => {
        if(window.innerWidth >= 1024) {
            if(document.documentElement.scrollTop >= nav.offsetTop) {
                nav.style.position = 'fixed';
                nav.style.top = '0';
                nav.style.left = '0';
                nav.style.background = 'white';
                nav.style.padding = '20px 0';
            }
        }
    }

}); */