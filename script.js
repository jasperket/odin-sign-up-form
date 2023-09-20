const passwordInput = document.getElementById('password');
const requirementsBox = document.querySelector('.password-requirements');

passwordInput.addEventListener('focus', () => {
    requirementsBox.style.opacity = 1;
    requirementsBox.style.display = "block";
});

passwordInput.addEventListener('blur', () => {
    requirementsBox.style.opacity = 0;
    requirementsBox.style.display = "none";
});

const signUpForm = document.querySelector('#signUpForm');
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const email = document.querySelector('#email');
    const phoneNum = document.querySelector('#phone-num');
    const confirmPass = document.querySelector('#confirm-pass');

    const emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // email can have alphanumeric characters, the period symbol, a single @ symbol, and ends with a top-level domain
    // like ".com", ".org", ".ph", etc.
    // similar to (alphanumeric)(alphanumeric + .)*@(alphanumeric + .)*
    // where alphanumeric = a+b+c+...z+A+B+...Z+0+1+2+...9

    const phonePattern = /^\d{11}$/;
    // equivalent to (number)(number)(number)(number)(number)(number)(number)(number)(number)(number)(number)
    // where number = 0+1+2+3+4+5+6+7+8+9

    const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // similar to (alphanumeric)*(UPPERCASE)(alphanumeric)*(lowercase)(alphanumeric)*(number)(alphanumeric)* +
    // (alphanumeric)*(UPPERCASE)(alphanumeric)*(number)(alphanumeric)*(lowercase)(alphanumeric)* +
    // (alphanumeric)*(lowercase)(alphanumeric)*(UPPERCASE)(alphanumeric)*(number)(alphanumeric)* +
    // (alphanumeric)*(lowercase)(alphanumeric)*(number)(alphanumeric)*(UPPERCASE)(alphanumeric)* +
    // (alphanumeric)*(number)(alphanumeric)*(UPPERCASE)(alphanumeric)*(lowercase)(alphanumeric)* +
    // (alphanumeric)*(number)(alphanumeric)*(lowercase)(alphanumeric)*(UPPERCASE)(alphanumeric)*

    let validInput = true;

    if(firstName.value === "") {
        validInput = false;
        firstName.classList.add("invalid");
    } else {
        firstName.classList.remove("invalid");
    }

    if(lastName.value === "") {
        validInput = false;
        lastName.classList.add("invalid");
    } else {
        lastName.classList.remove("invalid");
    }

    if(!emailPattern.test(email.value)) {
        validInput = false;
        email.classList.add("invalid");
    } else {
        email.classList.remove("invalid");
    }

    if(!phonePattern.test(phoneNum.value)) {
        validInput = false;
        phoneNum.classList.add("invalid");
    } else {
        phoneNum.classList.remove("invalid");
    }

    if(!passPattern.test(passwordInput.value)) {
        validInput = false;
        passwordInput.classList.add("invalid");
    } else {
        passwordInput.classList.remove("invalid");
    }

    if(!(passwordInput.value === confirmPass.value)) {
        validInput = false;
        confirmPass.classList.add("invalid");
    } else {
        confirmPass.classList.remove("invalid");
    }





    
    if(validInput) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
        const invalidText = document.querySelector('#invalid_input');
        invalidText.style.display = 'inline';
    }
})
