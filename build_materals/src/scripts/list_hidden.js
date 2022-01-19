let button = document.querySelector('.data__list-button ')
let buttonText = document.querySelector('.data__list-buttonText ')
let buttonIcon = document.querySelector('.data__list-buttonIcon ')
let listHidden = document.querySelector('.data__list-hidden ')
let main_content = document.querySelector('.main_content')

button.addEventListener('click', () => {
    listHidden.classList.toggle('hiddenText');
    if (listHidden.classList.contains('hiddenText') == true) {
        buttonText.innerHTML = 'свернуть'
        buttonIcon.style.transform = "rotate(180deg)"
        main_content.style.height = 'auto'
    } else {
        buttonText.innerHTML = 'развернуть'
        buttonIcon.style.transform = "rotate(0deg)"
        main_content.style.height = '100vh'
    }
    console.log(listHidden);
})