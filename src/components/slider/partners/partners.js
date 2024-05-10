export const PartnersSlider = { 
    container: document.querySelector('.partners-slider'),
    options: {
        freeMode: true,
        slidesPerView: 'auto',
        mousewheel: true
    },
    swiper: null,

    init() {
        if(this.container) {
            this.swiper = new Swiper(this.container, this.options)
        }
    }
}