export const StrategySlider = {
    container: document.querySelector('.section-strategy__slider'),
    
    options: {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options)
        }
    }
}