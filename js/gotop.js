$(document).ready(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 60) {
                $(".gotop").css("display", "block");
            } else {
                $(".gotop").css("display", "none");
            }
        });

        $(".gotop").click(function() {
            $("html,body").animate({
                scrollTop: '0px'
            }, 400)
        });

    })