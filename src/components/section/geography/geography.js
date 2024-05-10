export const Geography = {
    container: document.querySelector('.geography'),
    addresses: document.querySelectorAll('.geo-address'),
    planet: document.querySelector('.geography__planet'),
    addressPopup: document.querySelector('.geography__address-popup'),
    mark: document.querySelector('.geography__mark'),

    init() {
        if(this.container) {
            this.createAddressPopup()
            this.bindListeners()
        }
    },
    bindListeners() {
        if(this.addresses.length) {
            this.addresses.forEach(addressEl => {
                addressEl.addEventListener('mouseenter', (evt) => this.showAddressPopup(evt))
                addressEl.addEventListener('click', (evt) => {
                    if(evt.currentTarget.classList.contains('active')) {
                        evt.currentTarget.classList.remove('active')
                    } else {
                        this.addresses.forEach(el => el.classList.remove('active'))
                        evt.currentTarget.classList.toggle('active')
                    }
                    
                    this.setMarkPosition(evt)
                })
            })
        }
    },
    
    showAddressPopup(evt) {
        let container = evt.currentTarget

        this.addressPopup.innerHTML = container.querySelector('.geo-address__content').innerHTML
        
        if(this.addressPopup.classList.contains('show')) {
            this.addressPopup.classList.remove('show')

            setTimeout(() => {
                this.addressPopup.classList.add('show')
            }, 500)
        } else {
            this.addressPopup.classList.add('show')
        }

        
    },

    setMarkPosition(evt) {
        let coords = JSON.parse(evt.currentTarget.dataset.markCoords)

        this.mark.style.top = coords.top
        this.mark.style.left = coords.left
    },
    createAddressPopup() {
        this.addressPopup = document.createElement('div')
        this.addressPopup.className = 'geography__address-popup'

        this.planet.append(this.addressPopup)
    }
}