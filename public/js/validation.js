const userPhoneInput = document.querySelector('.input-phone');
const regPhoneInput = document.querySelector('.registration__phone');
const phoneTemplate = {
    mask: '+{7} 000 000 00 00',
    lazy: false,
    placeholderChar: '-'
}
const userPhone = IMask(userPhoneInput, phoneTemplate);
const regPhone = IMask(regPhoneInput, phoneTemplate);
userPhoneInput.addEventListener("blur", (e) => {
    phoneHandler(e, userPhone)
})
regPhoneInput.addEventListener("blur", (e) => {
    phoneHandler(e, regPhone)
})

function phoneHandler(event, IMask) {
    const inputLength = IMask._unmaskedValue.length
    const target = event.target.closest('input');
    if (inputLength > 1 && inputLength < 11) {
        target.classList.add('invalid');
        target.classList.remove('visited');
        target.classList.remove('valid');
    }
    if (inputLength === 11) {
        target.classList.add('visited');
        target.classList.add('valid');
        target.classList.remove('invalid');
    }
}


const regEmailInput = document.querySelector('.registration__email');
const loginEmailInput = document.querySelector('.login__email');
const regNameInput = document.querySelector('.registration__name');
const regURLInput = document.querySelector('.registration__url');
const regPasswordInput = document.querySelector('.registration__password');
const regPasswordInputRepeat = document.querySelector('.registration__password-repeat');
const regSubmitButton = document.querySelector('.popup-registration__button')
const passwordEye = document.querySelectorAll('.popup__input-eye')
regEmailInput.addEventListener('blur', (event) => changeState(event.target, emailCheck));
regEmailInput.addEventListener('keyup', (event) => changeState(event.target, emailCheck));
regURLInput.addEventListener('blur', (event) => changeState(event.target, urlCheck));
regURLInput.addEventListener('keyup', (event) => changeState(event.target, urlCheck));
regNameInput.addEventListener('blur', (event) => changeState(event.target, userNameCheck));
regNameInput.addEventListener('keyup', (event) => changeState(event.target, userNameCheck));
loginEmailInput.addEventListener('blur', (event) => changeState(event.target, urlCheck));
loginEmailInput.addEventListener('keyup', (event) => changeState(event.target, urlCheck));

regPasswordInput.addEventListener('blur', passwordHandler)
regPasswordInput.addEventListener('keyup', passwordHandler)
regPasswordInputRepeat.addEventListener('blur', passwordRepeatHandler)
regPasswordInputRepeat.addEventListener('keyup', passwordRepeatHandler)

function passwordHandler(event) {
    setTimeout(() => {
        changeState(event.target, passwordCheck);
        if (event.target.classList.contains('registration__password')) {
            passwordRepeatHandler();
        }
    }, 0)

}

function passwordRepeatHandler() {
    function compare({password, repeat}) {
        return password === repeat;
    }

    changeState(regPasswordInputRepeat, () => compare({
        password: regPasswordInput.value,
        repeat: regPasswordInputRepeat.value
    }))
}

passwordEye.forEach(item => {
    item.addEventListener('mouseenter', (passwordShow))
})
passwordEye.forEach(item => {
    item.addEventListener('mouseleave', (passwordHide))
})

function passwordShow(event) {
    const input = event.target.closest('.popup__input-wrapper').querySelector('input')
    input.setAttribute("type", 'text')
}

function passwordHide(event) {
    const input = event.target.closest('.popup__input-wrapper').querySelector('input')
    input.setAttribute("type", 'password')
}


const questionsButton = document.querySelector('.popup-questions__button');

questionsButton.addEventListener("click", function (e) {
    e.preventDefault();
})
regSubmitButton.addEventListener("click", function (e) {
    e.preventDefault();
})


function changeState(element, checkFunction) {
    const string = element.value;
    if (string.length === 0) {
        element.classList.remove('invalid');
        element.classList.remove('valid');
        return;
    }
    if (checkFunction(string)) {
        element.classList.add('valid');
        element.classList.remove('invalid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}

function emailCheck(string) {
    const temp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    return temp.test(string);
}

function urlCheck(string) {
    const temp = /[-a-zA-Z0-9@:%_+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&\/=]*)?/gi;
    return temp.test(string);
}

function userNameCheck(string) {
    const temp = /^[A-Za-zА-Яа-я0-9'\_\-\s]{2,16}$/;
    return temp.test(string);
}

function passwordCheck(string) {
    const temp = /^(?=.*[A-Z]+.*)(?=.*[a-z]+.*)(?=.*[0-9]+.*)(?=.*[-~!@#$%^&*(){}\[\]+`'";:<>\/\\|]+.*).{8,}$/;
    return temp.test(string);
}


