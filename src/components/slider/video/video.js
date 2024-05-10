export const VideoSlider = {
    container: document.querySelector('.video-slider'),
    options: {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 8
            },
            1200: {
                slidesPerView: 3
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