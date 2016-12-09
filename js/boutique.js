// You can avoid the document.ready if you put the script at the bottom of the page
$(document).ready(function() {
    // Bind to the click of all links with a #hash in the href
    $( ".scrollers" ).find('a[href^="#"]').click(function (e) {
        // Prevent the jump and the #hash from appearing on the address bar
        e.preventDefault();
        // Scroll the window, stop any previous animation, stop on user manual scroll
        // Check https://github.com/flesler/jquery.scrollTo for more customizability
        $(window).stop(true).scrollTo(this.hash, {duration: 1000, interrupt: true});
    });
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
        $(".nav").addClass("sticky-nav");
    }
    else{
        $(".nav").removeClass("sticky-nav");
    }
});