$('header').load('../includes/header.html', () => {
    $('.nav-open-btn').click( () => $('nav').css('right', '0') );
    $('.nav-close-btn').click( () => $('nav').css('right', '-75%') );
});

$('footer').load('../includes/footer.html');

/* $(document).ready( () => {
    let nav = document.querySelector('nav');

    window.onscroll = () => {
        if((window.innerWidth >= 1024) && (window.scrollY <= nav.offsetTop)) {
            nav.classList.remove('nav-scroll-position');
        } else {
            nav.classList.add('nav-scroll-position');
        }
    }
}); */
