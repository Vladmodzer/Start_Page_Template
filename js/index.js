const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__foll-aut-menu');

function toggleBtn() {
    burgerMenu.classList.toggle('show');
}

burgerBtn.addEventListener('click', toggleBtn);
