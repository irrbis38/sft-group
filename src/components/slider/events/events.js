export const EventsSlider = {
    container: document.querySelector('.events-slider'),
    options: {
        spaceBetween: 30,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            1200: {
                spaceBetween: 50,
            }
        }
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options)
        }
    }
}