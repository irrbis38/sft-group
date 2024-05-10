export const DetailSlider = {
    container: document.querySelector('.detail-slider__main'),
    thumbsContainer: document.querySelector('.detail-slider__thumbs'),

    swiper: null,
    thumbsSwiper: null,

    init() {
        if(this.thumbsContainer) {
            this.thumbsSwiper = new Swiper(this.thumbsContainer, {
                slidesPerView: 4
            })
        }

        this.swiper = new Swiper(this.container, {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: this.thumbsSwiper
            }
        })
    }
}