$(function() {
    var $window = $(window);
    $('.next').on('click', function(){
        $('section').each(function() {
            var pos = $(this).offset().top;  
            console.log("pos: " + pos, "$window.scrollTop(): " + $window.scrollTop());
            if ($window.scrollTop() < pos) {
                $('html, body').animate({
                    scrollTop: pos
                }, 1000);
                return false;
            }
        });
    });
});