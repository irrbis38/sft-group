export const ReviewsSlider = {
    container: document.querySelector('.section-reviews__slider'),
    options: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 8,
        navigation: {
            prevEl: document.querySelector('.section-reviews .swiper-button-prev'),
            nextEl: document.querySelector('.section-reviews .swiper-button-next')
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                slidesPerGroup: 1
            },
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 2
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