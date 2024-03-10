$(function () {
    var swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },
        // If we need pagination
        pagination: {
            enabled: false,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    var swiperVideo = new Swiper(".swiper-video", {
        effect: "coverflow",
        initialSlide: 1,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: true
        },
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
                effect: "coverflow",
                coverflowEffect: {
                    scale: 1,
                    modifier: 2,
                    depth: 200,
                }
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1,
                effect: "coverflow",
                coverflowEffect: {
                    scale: 1,
                    modifier: 2,
                    depth: 200,
                }
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: ".swiper-pagination"
        }
    });

    var swiperImage = new Swiper('.swiper-image', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        // If we need pagination
        pagination: {
            enabled: false,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    var swiperImage2 = new Swiper('.swiper-image-2', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true,
        // If we need pagination
        pagination: {
            enabled: false,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

});