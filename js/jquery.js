$(document).ready(function () {
    //Check to see if the window is top if not then display button


    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#arrowTop').fadeIn();
        } else {
            $('#arrowTop').fadeOut();
        }
    });

    $("header").append("<div class='glitch-window'></div>");
    //fill div with clone of real header
    $("h1.glitched").clone().appendTo(".glitch-window");

    //Click event to scroll to top
    $('#arrowTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $("#button").click(function () {
        $('html, body').animate({
            scrollTop: $("#elementtoScrollToID").offset().top
        }, 2000);
    })

    var header = $(".scrollClass");
    var asd = $(".nav-link");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
            asd.addClass("colorA");


        } else {
            header.removeClass("scrolled");
            asd.removeClass("colorA");

        }

    });
    // animated css
    var animationEnd = (function (el) {
        var animations = {
            "animation": "animationend",
            "OAnimation": "oAnimationEnd",
            "MozAnimation": "mozAnimationEnd",
            "WebkitAnimation": "webkitAnimationEnd"
        }

        for (var t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    })(document.createElement("fakeelement"));


    $(function () {
        $('.mediaIcon').hover(function () {
            $(this).addClass("animated bounce textCount").one(animationEnd,
                function () {
                    $(this).removeClass("animated bounce textCount")
                });

        });
    });

    $(function () {
        $('.txtH').hover(function () {
            $(this).addClass("animated jello").one(animationEnd,
                function () {
                    $(this).removeClass("animated jello")
                });

        });
    });
    
    $(function () {
        $('.btnClick').click(function () {
            $(this).addClass("animated jello").one(animationEnd,
                function () {
                    $(this).removeClass("animated jello")
                });

        });
    });

    // bgText
    setTimeout(function(){
        $('.bgText').removeClass('animated bounceInDown');
    },2000);
    $(function () {
        $('.bgText').hover(function () {
            $(this).addClass("animated bounce").one(animationEnd,
                function () {
                    $(this).removeClass("animated bounce")
                });

        });
    });
    // end

    $(function () {
        $('.iconG').hover(function () {
            $(this).addClass("animated rubberBand").one(animationEnd,
                function () {
                    $(this).removeClass("animated rubberBand")
                });

        });
    });

    $(function () {
        $('.imgC').hover(function () {
            $(this).addClass("animated rubberBand").one(animationEnd,
                function () {
                    $(this).removeClass("animated rubberBand")
                });

        });
    });
 
 
 
    //   END off animated css
    

});