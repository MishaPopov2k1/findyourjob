const registrationButton = document.querySelector('.button-registration');
const modalRegistration = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal-button')

const modalToggle = ()=>{
    modalRegistration.classList.toggle('hidden');
};


registrationButton.addEventListener('click', modalToggle);

modalRegistration.addEventListener('click', (event) => {
    console.log(event.target);
    const target = event.target;

    if (target.classList.contains('overlay') ||
        target.classList.contains('close-modal-button')) {
            modalToggle();
    }
})