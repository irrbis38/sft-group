export const InputFile = {
    selector: document.querySelectorAll('.file-upload'),

    init() {
        if(this.selector.length) {
            this.selector.forEach(item => fileUploder(item).init())
        }
    }
}

const fileUploder = (selector) => {
    let object = {
        container: selector,
        input: selector.querySelector('.file-upload__input'),
        preview: null,

        init() {
            this.bindListeners()
        },

        bindListeners() {
            this.input.addEventListener('input', (evt) => this.renderFilePreview(evt.target.files[0]))
        },

        renderFilePreview(file) {

            if(!file && this.preview) {
                this.preview.remove()
                this.preview = null
                return
            }

            if(!this.preview) {
                let div = document.createElement('div')
                div.className = 'file-upload__preview'

                let span = document.createElement('span')
                    span.className = 'file-upload__preview-text'
                    span.innerText = file.name

                let button = document.createElement('button')
                    button.className = 'file-upload__preview-remove'
                    button.setAttribute('type', 'button')
                    button.addEventListener('click', () => this.removeFile())

                div.append(span)
                div.append(button)

                this.preview = div
                this.container.append(this.preview)
            }

            this.preview.querySelector('span').innerText = file.name
        },
        removeFile () {
            this.input.value = '';
            this.input.dispatchEvent(new Event('input'))
        }
    }

    return object
}