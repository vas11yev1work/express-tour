window.addEventListener('DOMContentLoaded', () => {
    const dropdownList = document.querySelectorAll('.dropdown')
    const mobileMenuButton = document.querySelector('#toggle-menu')
    const mobileMenu = document.querySelector('.mobile-menu')
    const overlay = document.querySelector('#overlay')

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open')
    })

    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
    })

    dropdownList.forEach(item => {
        const text = item.querySelector('[data-title]')
        const dropBlock = item.querySelector('.dropdown-menu')

        text.addEventListener('click', () => {
            dropBlock.classList.toggle('open')
        })

        document.addEventListener('scroll', () => {
            dropBlock.classList.remove('open')
        })

        document.addEventListener('click', event => {
            if (!item.contains(event.target)) {
                dropBlock.classList.remove('open')
            }
        })
    })
})
