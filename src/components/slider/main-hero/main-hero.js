export const MainHeroSlider = { 
    container: document.querySelector('.main-hero__slider'),
    options: {
        loop: true,
        autoplay: {
            delay: 5000
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options)
        }
    }
}