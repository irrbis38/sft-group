export const NewsSlider = {
    container: document.querySelector('.news-slider'),
    options: {
        slidesPerView: 1,
        spaceBetween: 60,
        grid: {
            fill: 'row',
            rows: 2,
        },
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        breakpoints: {
            1200: {
                spaceBetween: 125,
                slidesPerView: 2
            }
        },
        init: false
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options)
            this.bindListeners()
            this.swiper.init()
        }
    },

    bindListeners() {
        this.swiper.on('init', swiper => {
            const length = swiper.slides.length

            swiper.slides.forEach((slide, index) => {
                if(length / 2 > index) {
                    slide.classList.add('first-half')
                } else {
                    slide.classList.add('second-half')
                }
            });
        })
    }
}