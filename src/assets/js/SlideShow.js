//
window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $('#slider').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        navText:["<div> " +
        "<div class='nav-btn prev-slide  text-info'>" +
        "<i class='fas  fa-arrow-circle-left fa-2x'></i></div>",
            "<div class='nav-btn next-slide text-info'>" +
            "<i class='fas fa-arrow-circle-right fa-2x'></i>" +
            "</div>"+"</div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    $('#slider-tablet').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        navText:["<div> " +
        "<div class='nav-btn prev-slide  text-info'>" +
        "<i class='fas  fa-arrow-circle-left fa-2x'></i></div>",
            "<div class='nav-btn next-slide text-info'>" +
            "<i class='fas fa-arrow-circle-right fa-2x'></i>" +
            "</div>"+"</div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    $('#slider-brands').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        navText:["<div> " +
        "<div class='nav-btn prev-slide  text-info'>" +
        "<i class='fas  fa-arrow-circle-left fa-2x'></i></div>",
            "<div class='nav-btn next-slide text-info'>" +
            "<i class='fas fa-arrow-circle-right fa-2x'></i>" +
            "</div>"+"</div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    var headerCart = $('.header-cart');
    var closeCart = $('.close-cart, .cart-overlay');
    var miniCartWrap = $('.mini-cart-wrap');

    headerCart.on('click', function(e){
        e.preventDefault();
        $('.cart-overlay').addClass('visible');
        miniCartWrap.addClass('open');
    });
    closeCart.on('click', function(e){
        e.preventDefault();
        $('.cart-overlay').removeClass('visible');
        miniCartWrap.removeClass('open');
    });
};
// window.onload = function () {
//     $('#slider').owlCarousel({
//         rtl: true,
//         loop: true,
//         margin: 10,
//         nav: true,
//         navText:["<div> " +
//         "<div class='nav-btn prev-slide  text-info'>" +
//         "<i class='fas  fa-arrow-circle-left fa-2x'></i></div>",
//             "<div class='nav-btn next-slide text-info'>" +
//             "<i class='fas fa-arrow-circle-right fa-2x'></i>" +
//             "</div>"+"</div>"],
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 5
//             }
//         }
//     })
//
// }
