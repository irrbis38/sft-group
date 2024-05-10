export const InnovationSlider = { 
    container: document.querySelector('.innovation-slider'),
    options: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 8
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