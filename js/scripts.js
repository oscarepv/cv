$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link, a.btn-primary, a.btn-outline').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // Offset for the fixed navbar
            var navHeight = $('.navbar').outerHeight();

            $('html, body').animate({
                scrollTop: $(hash).offset().top - navHeight
            }, 800, function(){
                // Optional: Add hash to URL
                // window.location.hash = hash;
            });
        }
    });

    // Active link highlighting based on scroll position
    $(window).on('scroll', function() {
        var scrollDistance = $(window).scrollTop() + $('.navbar').outerHeight() + 10;

        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.nav-links a.nav-link.active').removeClass('active');
                $('.nav-links a.nav-link').eq(i - 1).addClass('active'); // i-1 because hero has no nav link
            }
        });
    }).scroll(); // Trigger on load

    // Modal Image handling
    $('.project-view').on('click', function(e){
        e.preventDefault();
        var ruta_imagen = $(this).data('img');
        $('#imagen-modal').attr('src', ruta_imagen);
    });

    // Close modal when clicking on it
    $('#modal').on('click', function(){
        $('#modal').modal('hide');
    });
});