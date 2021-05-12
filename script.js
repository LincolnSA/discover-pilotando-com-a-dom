const btnModal = document.querySelector('button')
const divModal = document.querySelector('div')
const body = document.querySelector('body')

btnModal.addEventListener('click', () => {
    divModal.classList.remove('invisible')
    body.style.backgroundColor = "rgb(37, 37, 37,  0.22)"
})

document.addEventListener('keydown', (event) => {
    const { code } = event
    const closeModal = "Escape"

    if (code === closeModal) {
        divModal.classList.add('invisible')
        body.style.backgroundColor = "#fff"
    }

})
