const shareButton = document.querySelector('.share')
const toolTip = document.querySelector('.toolTip')

shareButton.addEventListener('click', () => {
    toolTip.classList.toggle('active')
})

const closeMobileTooltip = document.querySelector('.closeShare')

closeMobileTooltip.addEventListener('click', () => {
    toolTip.classList.remove('active')
})