export const BannerSlider = {
    container: document.querySelectorAll('.banner-slider'),

    options: {
        slidesPerView: 1,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }
    },

    init() {
        if(this.container.length) {
            this.container.forEach(el => {
                new Swiper(el, this.options)
            })
        }
    }
}