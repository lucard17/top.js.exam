const main = document.querySelector('.main');
const second = document.querySelector('.second')
const burgerButton = document.querySelector('.header__burger');
const burgerPopup = document.querySelector('.header__burger-popup');
const buttonLogin = document.querySelector('.button-login');
const buttonConnect = document.querySelectorAll('.button-connect')
const buttonRegistration = document.querySelector('.button-registration')
const popupLoginButtonRegistration =document.querySelector('.popup-login__button-registration')
const popupButtonClose = document.querySelectorAll('.popup__button-close');
const popupLogin = document.querySelector('.popup-login')
const popupQuestions = document.querySelector('.popup-questions')
const popupRegistration = document.querySelector('.popup-registration')



popupLoginButtonRegistration.addEventListener('click', (event)=>{
    event.preventDefault();
    event.target.closest('.popup').classList.add('hide');
    popupRegistration.classList.remove('hide');
})
burgerButton.addEventListener('click', () => {
    burgerPopup.classList.toggle('hide')
});
buttonLogin.addEventListener('click', () => {
    showPopup(popupLogin)
});
buttonConnect.forEach(item => item.addEventListener('click', () => {
    showPopup(popupQuestions)
}));
buttonRegistration.addEventListener('click', () => {
    showPopup(popupRegistration)
})

function showPopup(popup) {
    sessionStorage.setItem("scrollY", window.scrollY.toString())
    popup.classList.remove('hide');
    document.body.classList.add('scroll-disabled');
}
popupButtonClose.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        event.target.closest('.popup').classList.add('hide');
        document.body.classList.remove('scroll-disabled');
        window.scrollTo(0, parseInt(sessionStorage.getItem('scrollY')))
    })
})

