export const AboutPartnersSlider = {
    container: document.querySelector('.about-partners__slider'),

    options: {
        slidesPerView: 1,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            768: {
                slidesPerView: 3
            }
        }
    },

    swiper: false,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options)
        }
    }
}