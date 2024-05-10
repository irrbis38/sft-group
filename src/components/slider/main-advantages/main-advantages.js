export const MainAdvantagesSlider = { 
    container: document.querySelector('.main-advantages__slider'),
    options: {
        slidesPerView: 1,
        grid: {
            rows: 2,
        },
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