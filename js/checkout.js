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
            validarCampos(regex.firstName, e.target, e.target.name, 'errorName');
            break;
        case 'email':
            validarCampos(regex.email, e.target, e.target.name, 'errorEmail');
            break;
        case 'address':
            validarCampos(regex.address, e.target, e.target.name, 'errorAddress');
            break;
        case 'password':
            validarCampos(regex.password, e.target, e.target.name, 'errorPassword');
            break;
        case 'lastName':
            validarCampos(regex.lastName, e.target, e.target.name, 'errorLastN');
            break;
        case 'phoneNumber':
            validarCampos(regex.phoneNumber, e.target, e.target.name, 'errorPhone');
            break;
    }
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', validarForm);
}

function validate() {
    if (campos.firstName && campos.lastName && campos.password && campos.phoneNumber && campos.address && campos.email) {
        form.reset();
        let validForm = document.querySelectorAll('.valid-form');

        for (let i = 0; i < validForm.length; i++) {
            console.log('longitud array: ' + validForm.length);
            validForm[i].classList.remove('valid-form');

        }
        campos.firstName = false;
        campos.lastName = false;
        campos.password = false;
        campos.phoneNumber = false;
        campos.address = false;
        campos.email = false;

        alert("Form submitted");
    } else {
        alert('Fill in all the fields of the form');
    }
}


