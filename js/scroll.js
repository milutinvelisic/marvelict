$(document).ready(function(){
    $(window).scroll(function(){

        var skroll = $(this).scrollTop();
        
        skroll > 1900 ? $("#scrollToTop").fadeIn() : $("#scrollToTop").fadeOut();

    })
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
         }, 1000);
    });
});