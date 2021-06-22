$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        speed: 1000,
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
        $(".feedbackform").fadeIn(2000);
    });
});
$(document).ready(function(){
    $('.close').click(function(){
        $(".feedbackform").fadeOut(2000);
    });
});