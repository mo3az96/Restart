$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "auto");
        $('body').animate({
            scrollTop: 0
        }, 1);
    });
});
$(document).ready(function () {
    /////////Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            768: {
                items: 1,
                dots: true,
                nav: false
            },
        }
    });

    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        items: 5,
        autoplay: false,
        margin: 10,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        rewind: true,
        nav: true,
        dots: false,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            500: {
                items: 3,
                dots: true,
                nav: false,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });
    /////////Accordion/////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
        console.log()
    })
    /////////Menu/////////
    $('.mo-menu-icon').click(function () {
        $(".navbar-cont").fadeIn(1000);
        $(".mo-navbar").toggleClass("nav-in");
        $("body").toggleClass("overflow");
    });
    $('.navbar-cont').click(function () {
        $(".navbar-cont").fadeOut(400);
        $(".mo-navbar").toggleClass("nav-in");
        $("body").toggleClass("overflow");
    });
    $('.mo-navbar').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-search-icon').click(function () {
        $(".overlay").fadeIn(500);
        $(".search-cont").fadeIn(500);
        $("body").toggleClass("overflow");
        $('.search-input').focus();
    });
    $('.overlay').click(function () {
        $("body").removeClass("overflow");
        $(".search-cont").fadeOut(500);
        $(".overlay").fadeOut(500);
    });
    $('.close-btn').click(function () {
        $(".navbar-cont").fadeOut(350);
        $(".mo-navbar").removeClass("nav-in");
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(300);
    });
});