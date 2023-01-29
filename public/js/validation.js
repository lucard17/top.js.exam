// const userName = document.querySelector('.input-phone');
const userPhoneInput = document.querySelector('.input-phone');
const qBtn = document.querySelector('.questions__button');
const userPhone = IMask(userPhoneInput,
    {
        mask: '+{7} 000 000 00 00',
        lazy: false,
        placeholderChar: '-'
    });
userPhoneInput.addEventListener("blur", function (e) {
    // console.log(e)
    console.log(userPhone._unmaskedValue.length)
    const inputLength = userPhone._unmaskedValue.length
    if (inputLength < 11) {
        userPhoneInput.classList.add('input-phone_invalid');
        userPhoneInput.classList.remove('input-phone_active');
    }
    if (inputLength === 11) {
        userPhoneInput.classList.add('input-phone_active');
        userPhoneInput.classList.remove('input-phone_invalid');
    }


})
qBtn.addEventListener("click", function(e){
    e.preventDefault();
})
