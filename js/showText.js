document.addEventListener('DOMContentLoaded', () => {
    const showMoreButton = document.querySelector('.show-more')
    const descriptionBlock = document.querySelector('.functional-description')

    showMoreButton.addEventListener('click', () => {
        descriptionBlock.classList.toggle('open')
        if (descriptionBlock.classList.contains('open')) {
            showMoreButton.innerHTML = 'Hide Text...'
        } else {
            showMoreButton.innerHTML = 'Show More...'
        }
    })
})