// You can avoid the document.ready if you put the script at the bottom of the page
$(document).ready(function() {
    $(".scrollers a[href^='#']").on('click', function (e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        }, 500, function () {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });
    new WOW().init();
});
$(document).ready(function() {
    $('.menu-link').bigSlide({
        push:      ('.push'),
        menuWidth: '15.6em',
        side:     'right',
        speed:    '300',
        easyClose: 'true',
        activeBtn: 'is-active'});
});

$(window).scroll(function() {

    if ($(this).scrollTop() > 10){
        $(".sticky-nav").addClass("open");
    }
    else{
        $(".sticky-nav").removeClass("open");
    }
});
