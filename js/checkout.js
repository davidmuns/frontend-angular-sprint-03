// Exercise 7

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const regex = {
    firstName: /^[a-zA-Z\s]{3,15}$/,
    lastName: /^[a-zA-Z\s]{3,20}$/,
    phoneNumber: /^[0-9]{9}$/,
    password: /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]{8,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    address: /^[a-zA-Z0-9\s]{3,25}$/
}

const campos = {
    firstName: false,
    lastName: false,
    phoneNumber: false,
    password: false,
    email: false,
    address: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
});

const validarCampos = function (expresion, input, campo, error) {
    if (expresion.test(input.value)) {
        document.getElementById(`group-${campo}`).classList.add('valid-form');
        document.getElementById(`group-${campo}`).classList.remove('invalid-form');
        document.querySelector(`#group-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#group-${campo} i`).classList.remove('fa-times-circle');
        document.getElementById(`${error}`).classList.add('invalid-feedback');
        campos[campo] = true;

    } else {
        document.getElementById(`group-${campo}`).classList.add('invalid-form');
        document.getElementById(`group-${campo}`).classList.remove('valid-form');
        document.querySelector(`#group-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group-${campo} i`).classList.add('fa-times-circle');
        document.getElementById(`${error}`).classList.remove('invalid-feedback');
        campos[campo] = false;
    }
};

const validarForm = function (e) {

    switch (e.target.name) {
        case 'firstName':
            validarCampos(regex.firstName, e.target, 'firstName', 'errorName');
            // if (regex.firstName.test(e.target.value)) {
            //     document.getElementById('group-first-name').classList.add('valid-form');
            //     document.getElementById('group-first-name').classList.remove('invalid-form');
            //     document.querySelector('#group-first-name i').classList.add('fa-check-circle');
            //     document.querySelector('#group-first-name i').classList.remove('fa-times-circle');
            //     document.getElementById('errorName').classList.add('invalid-feedback');

            // } else {
            //     document.getElementById('group-first-name').classList.add('invalid-form');
            //     document.getElementById('group-first-name').classList.remove('valid-form');
            //     document.querySelector('#group-first-name i').classList.remove('fa-check-circle');
            //     document.querySelector('#group-first-name i').classList.add('fa-times-circle');
            //     document.getElementById('errorName').classList.remove('invalid-feedback');
            // }
            break;
        case 'email':
            validarCampos(regex.email, e.target, 'email', 'errorMail');
            // if (regex.email.test(e.target.value)) {
            //     document.getElementById('group-email').classList.add('valid-form');
            //     document.getElementById('group-email').classList.remove('invalid-form');
            //     document.querySelector('#group-email i').classList.add('fa-check-circle');
            //     document.querySelector('#group-email i').classList.remove('fa-times-circle');
            //     document.getElementById('errorEmail').classList.add('invalid-feedback');

            // } else {
            //     document.getElementById('group-email').classList.add('invalid-form');
            //     document.getElementById('group-email').classList.remove('valid-form');
            //     document.querySelector('#group-email i').classList.remove('fa-check-circle');
            //     document.querySelector('#group-email i').classList.add('fa-times-circle');
            //     document.getElementById('errorEmail').classList.remove('invalid-feedback');
            // }
            break;
        case 'address':
            validarCampos(regex.address, e.target, 'address', 'errorAddress');
            // if (regex.address.test(e.target.value)) {
            //     document.getElementById('group-address').classList.add('valid-form');
            //     document.getElementById('group-address').classList.remove('invalid-form');
            //     document.querySelector('#group-address i').classList.add('fa-check-circle');
            //     document.querySelector('#group-address i').classList.remove('fa-times-circle');
            //     document.getElementById('errorAddress').classList.add('invalid-feedback');

            // } else {
            //     document.getElementById('group-address').classList.add('invalid-form');
            //     document.getElementById('group-address').classList.remove('valid-form');
            //     document.querySelector('#group-address i').classList.remove('fa-check-circle');
            //     document.querySelector('#group-address i').classList.add('fa-times-circle');
            //     document.getElementById('errorAddress').classList.remove('invalid-feedback');
            // }
            break;
        case 'password':
            validarCampos(regex.password, e.target, 'password', 'errorPassword');
            // if (regex.password.test(e.target.value)) {
            //     document.getElementById('group-password').classList.add('valid-form');
            //     document.getElementById('group-password').classList.remove('invalid-form');
            //     document.querySelector('#group-password i').classList.add('fa-check-circle');
            //     document.querySelector('#group-password i').classList.remove('fa-times-circle');
            //     document.getElementById('errorPassword').classList.add('invalid-feedback');
            // } else {
            //     document.getElementById('group-password').classList.add('invalid-form');
            //     document.getElementById('group-password').classList.remove('valid-form');
            //     document.querySelector('#group-password i').classList.remove('fa-check-circle');
            //     document.querySelector('#group-password i').classList.add('fa-times-circle');
            //     document.getElementById('errorPassword').classList.remove('invalid-feedback');
            // }
            break;
        case 'lastName':
            validarCampos(regex.lastName, e.target, 'lastName', 'errorLastN');
            // if (regex.lastName.test(e.target.value)) {
            //     document.getElementById('group-last-name').classList.add('valid-form');
            //     document.getElementById('group-last-name').classList.remove('invalid-form');
            //     document.querySelector('#group-last-name i').classList.add('fa-check-circle');
            //     document.querySelector('#group-last-name i').classList.remove('fa-times-circle');
            //     document.getElementById('errorLastN').classList.add('invalid-feedback');
            // } else {
            //     document.getElementById('group-last-name').classList.add('invalid-form');
            //     document.getElementById('group-last-name').classList.remove('valid-form');
            //     document.querySelector('#group-last-name i').classList.remove('fa-check-circle');
            //     document.querySelector('#group-last-name i').classList.add('fa-times-circle');
            //     document.getElementById('errorLastN').classList.remove('invalid-feedback');
            // }
            break;
        case 'phoneNumber':
            validarCampos(regex.phoneNumber, e.target, 'phoneNumber', 'errorPhone');
            // if (regex.phoneNumber.test(e.target.value)) {
            //     document.getElementById('group-phone-number').classList.add('valid-form');
            //     document.getElementById('group-phone-number').classList.remove('invalid-form');
            //     document.querySelector('#group-phone-number i').classList.add('fa-check-circle');
            //     document.querySelector('#group-phone-number i').classList.remove('fa-times-circle');
            //     document.getElementById('errorPhone').classList.add('invalid-feedback');
            // } else {
            //     document.getElementById('group-phone-number').classList.add('invalid-form');
            //     document.getElementById('group-phone-number').classList.remove('valid-form');
            //     document.querySelector('#group-phone-number i').classList.remove('fa-check-circle');
            //     document.querySelector('#group-phone-number i').classList.add('fa-times-circle');
            //     document.getElementById('errorPhone').classList.remove('invalid-feedback');
            // }
            break;
    }


}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', validarForm);
    //inputs[i].addEventListener('blur', validarForm);
}

function validate() {
    if (campos.firstName && campos.lastName && campos.password && campos.phoneNumber && campos.address && campos.email) {
        alert("OK");
    } else {
        alert('error');
    }
}


