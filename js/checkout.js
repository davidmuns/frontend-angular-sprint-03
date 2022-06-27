
// Nivel 1

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

const fields = {
    firstName: false,
    lastName: false,
    phoneNumber: false,
    password: false,
    email: false,
    address: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

const validateField = function (expression, input, field, error) {
    if (expression.test(input.value)) {
        document.getElementById(`${field}`).classList.add('valid-form');
        document.getElementById(`${field}`).classList.remove('invalid-form');
        document.querySelector(`#${field} i`).classList.add('fa-check-circle');
        document.querySelector(`#${field} i`).classList.remove('fa-times-circle');
        document.getElementById(`${error}`).classList.add('invalid-feedback');
        fields[field] = true;

    } else {
        document.getElementById(`${field}`).classList.add('invalid-form');
        document.getElementById(`${field}`).classList.remove('valid-form');
        document.querySelector(`#${field} i`).classList.remove('fa-check-circle');
        document.querySelector(`#${field} i`).classList.add('fa-times-circle');
        document.getElementById(`${error}`).classList.remove('invalid-feedback');
        fields[field] = false;
    }
};

const validateForm = function (e) {

    switch (e.target.name) {
        case 'firstName':
            validateField(regex.firstName, e.target, e.target.name, 'errorName');
            break;
        case 'email':
            validateField(regex.email, e.target, e.target.name, 'errorEmail');
            break;
        case 'address':
            validateField(regex.address, e.target, e.target.name, 'errorAddress');
            break;
        case 'password':
            validateField(regex.password, e.target, e.target.name, 'errorPassword');
            break;
        case 'lastName':
            validateField(regex.lastName, e.target, e.target.name, 'errorLastN');
            break;
        case 'phoneNumber':
            validateField(regex.phoneNumber, e.target, e.target.name, 'errorPhone');
            break;
    }
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', validateForm);
}

function validateSubmit() {

    if (fields.firstName && fields.lastName && fields.password && fields.phoneNumber && fields.address && fields.email) {
        form.reset();
        let validForm = document.querySelectorAll('.valid-form');

        for (let i = 0; i < validForm.length; i++) {
            console.log('longitud array: ' + validForm.length);
            validForm[i].classList.remove('valid-form');

        }

        fields.firstName = false;
        fields.lastName = false;
        fields.password = false;
        fields.phoneNumber = false;
        fields.address = false;
        fields.email = false;

        alert("Form submitted");
    } else {
        alert('Fill correctly in all the fields of the form');
    }
}


