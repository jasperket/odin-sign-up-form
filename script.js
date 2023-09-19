const passwordInput = document.getElementById('password');
const requirementsBox = document.querySelector('.password-requirements');

passwordInput.addEventListener('focus', () => {
    requirementsBox.style.opacity = 1;
});

passwordInput.addEventListener('blur', () => {
    requirementsBox.style.opacity = 0;
});