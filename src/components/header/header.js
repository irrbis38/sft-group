export const Header = {
    header: document.querySelector('.header'),
    menu: document.querySelector('.header-menu'),
    burger: document.querySelector('.header__burger'),
    isWhite: false,
    isAbsolute: false,
    
    init() {
        this.isWhite = this.header.classList.contains('header_white')
        this.isAbsolute = this.header.classList.contains('header_absolute')

        this.onFix()
        this.bindListeners()
    },
    bindListeners() {
        window.addEventListener('scroll', this.onFix.bind(this))
        this.burger.addEventListener('click', this.onToggleMenu.bind(this))
    },

    onFix() {
        if(window.scrollY > (this.header.offsetHeight * 2)) {
            this.header.classList.add('header_fixed')
            
            if(this.isAbsolute) {
                this.header.classList.remove('header_absolute')
            } else {
                document.body.style.marginTop = this.header.offsetHeight + 'px'
            }

            if(this.isWhite) {
                this.header.classList.remove('header_white')
            }
        } else {
            this.header.classList.remove('header_fixed')

            if(this.isAbsolute) {
                this.header.classList.add('header_absolute')
            } else {
                document.body.style.marginTop = ''
            }
            
            if(this.isWhite) {
                this.header.classList.add('header_white')
            }
        }
    },
    onToggleMenu() {
        this.menu.classList.toggle('show')
        this.burger.classList.toggle('active')

        if(this.menu.classList.contains('show')) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        if(this.menu.classList.contains('show') && this.header.classList.contains('header_absolute')) {
            this.header.classList.remove('header_white')
        }

        if(!this.menu.classList.contains('show') && this.header.classList.contains('header_absolute')) {
            this.header.classList.add('header_white')
        }
    }
}