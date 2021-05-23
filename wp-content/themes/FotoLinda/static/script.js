if (document.querySelector(".banner-home")) {

    function parallax() {
        var $bannerHome = document.querySelector(".banner-home");

        var yPos = window.pageYOffset / $bannerHome.dataset.speed;
        yPos = yPos;

        var coords = '0% ' + yPos + 'px';

        $bannerHome.style.backgroundPosition = coords;
    }
}
if (document.querySelector(".galeria-home .top")) {

    function parallaxSec() {
        let offset = document.querySelector('.banner-home').offsetHeight + document.querySelector('.description').offsetHeight + document.querySelector('.oferta').offsetHeight;

        var $galleryLax = document.querySelector(".galeria-home .top");

        var yPos = (window.pageYOffset - offset) / $galleryLax.dataset.speed;
        yPos = yPos;

        var coords = '0% ' + yPos + 'px';

        $galleryLax.style.backgroundPosition = coords;
    }
}
if (document.querySelector(".last-section")) {
    function parallaxThr() {
        let offset = document.querySelector('.banner-home').offsetHeight + document.querySelector('.description').offsetHeight + document.querySelector('.oferta').offsetHeight + document.querySelector('.galeria-home').offsetHeight;
        // console.log(offset)
        var $lastSecLax = document.querySelector(".last-section");

        var yPos = (window.pageYOffset - offset) / $lastSecLax.dataset.speed;
        yPos = yPos;

        var coords = '0% ' + yPos + 'px';

        $lastSecLax.style.backgroundPosition = coords;
    }
}



window.addEventListener("scroll", function () {
    document.querySelector(".banner-home") && parallax();
    document.querySelector(".galeria-home .top") && parallaxSec();
    document.querySelector(".last-section") && parallaxThr();
});




var opener = document.querySelector('.btGnb')
opener.addEventListener('click', () => {
    document.getElementById('gnb').classList.toggle('active');
    opener.classList.toggle('active');
})

var swiperOffer = new Swiper('.swiper-container-oferta', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        780: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        1150: {
            slidesPerView: 3,
        }
    }
});

var swiperPostNav = new Swiper('.swiper-container-postsNav', {
    slidesPerView: 6,
    spaceBetween: 0,
    // loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    freeMode: true,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
        },
        620: {
            slidesPerView: 4,
        },
        780: {
            slidesPerView: 5,
        },
        // when window width is >= 640px
        1150: {
            slidesPerView: 6,
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('macy-container')) {
        var masonryHome = new Macy({
            container: '#macy-container',
            trueOrder: false,
            waitForImages: false,
            useOwnImageLoader: false,
            debug: true,
            mobileFirst: true,
            columns: 3,
            margin: {
                y: 0,
                x: 0,
            },
            breakAt: {
                1200: 3,
                940: 3,
                520: 2,
                400: 2
            },
        });


        function callback(mutationsList, observer) {
            console.log('Mutations:', mutationsList)
            console.log('Observer:', observer)
            mutationsList.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    masonryHome.runOnImageLoad(function () {
                        masonryHome.recalculate(true);
                    }, true);
                }
            })
        }

        const mutationObserver = new MutationObserver(callback)
        let demoImg = document.querySelectorAll('.demo-image')
        demoImg.forEach(el => {
            mutationObserver.observe(el, {
                attributes: true
            })
        })


    }

    if (document.getElementById('macy-container-single')) {
        var masonrySingle = new Macy({
            container: '#macy-container-single',
            trueOrder: false,
            waitForImages: false,
            useOwnImageLoader: false,
            debug: true,
            mobileFirst: true,
            columns: 4,
            margin: {
                y: 0,
                x: 0,
            },
            margin: {
                y: 16,
                x: '2%',
            },
            breakAt: {
                1200: 4,
                940: 3,
                520: 2,
                400: 2
            },
        });

        function callback(mutationsList, observer) {
            console.log('Mutations:', mutationsList)
            console.log('Observer:', observer)
            mutationsList.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    masonrySingle.runOnImageLoad(function () {
                        masonrySingle.recalculate(true);
                    }, true);
                }
            })
        }

        const mutationObserver = new MutationObserver(callback)
        let demoImg = document.querySelectorAll('.demo-image')
        demoImg.forEach(el => {
            mutationObserver.observe(el, {
                attributes: true
            })
        })
    }

})