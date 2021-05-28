const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close-button');

const menuToggle = () =>{
    menu.classList.toggle('is-open')
}

menuButton.addEventListener('click', menuToggle);

closeMenuButton.addEventListener('click', menuToggle);