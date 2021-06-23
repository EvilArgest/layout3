$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        speed: 800,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        fade: true,
        draggable: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false
    });
});
$(document).ready(function(){
    $('.feedback').click(function(){
        $(".feedbackform").fadeIn(1000);
    });
});
$(document).ready(function(){
    $('.close').click(function(){
        $(".feedbackform").fadeOut(1000);
    });
});

