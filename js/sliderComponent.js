class SliderComponent {
    constructor(options) {
        // сам компонент
        this.selector = document.querySelector(options.selector)     

        // ширина высота по умолчанию
        this.size = options.size || {
            defaultHeight: '400px',
            defaultWidth: '700px'
        },

        // слайд по умолчанию
        this.currentSlide = options.startSlide || 0

        // autoplay
        this.autoplay = options.autoplay || false
        this.autoplayTime = options.autoplayTime || 3000

        // wrapper слайдов
        this.slidesWrapSelector = this.selector.querySelector(options.slidesWrapSelector)
        this.slidesWrapSelector.style.display = 'flex'
        this.slidesWrapSelector.style.transition = options.transition || '0.2s'
        
        // слайды
        this.slides = this.slidesWrapSelector.querySelectorAll(options.slideSelector)

        // параметры слайдера
        this.selector.style.width = this.size.defaultWidth
        this.selector.style.height = this.size.defaultHeight
        this.selector.style.overflow = 'hidden'

        // кнопки
        this.changeSlideButtons = options.changeSlideButtons
        this.nextBtn = this.selector.querySelector(this.changeSlideButtons.next)
        this.prevBtn = this.selector.querySelector(this.changeSlideButtons.prev)

        // параметры каждого слайда
        this.slides.forEach(el => {
            this.updateWidth(el)
        })
        
        this.nextBtn.addEventListener('click', () => {
            this.changeSlide('next')            
        })
        this.prevBtn.addEventListener('click', () => {
            this.changeSlide('prev')
        })
    }

    updateTransform(n) {
        this.slidesWrapSelector.style.transform = `translateX(-${n * 100}%)`
    }

    updateWidth(el) {
        el.style.width = this.size.defaultWidth
        el.style.height = this.size.defaultHeight
    }

    nextSlide() {
        if (this.currentSlide === 0) {
            this.currentSlide = this.slides.length - 1
            this.updateTransform(this.currentSlide)
        } else {
            this.currentSlide = this.currentSlide -1
            this.updateTransform(this.currentSlide)
        }
    }

    prevSlide() {
        if (this.currentSlide + 1 < this.slides.length) {
            this.currentSlide = this.currentSlide + 1
            this.updateTransform(this.currentSlide)
        } else {
            this.currentSlide = 0
            this.updateTransform(this.currentSlide)
        }
    }

    changeSlide(type) {
        switch (type) {
            case 'prev':
                this.nextSlide()
                break
            case 'next':
                this.prevSlide()
                break
        }
    }
}