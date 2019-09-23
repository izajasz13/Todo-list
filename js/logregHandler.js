const logregBox = document.querySelector('.logreg-box');
const logButton = logregBox.querySelector('.login');
const regButton = logregBox.querySelector('.register');

logButton.addEventListener('click', () => {
    logregBox.classList.add('hidden');
    const logBox = document.querySelector('.login-box');
    logBox.classList.remove('hidden');    
});

regButton.addEventListener('click', () => {
    logregBox.classList.add('hidden');
    const logBox = document.querySelector('.register-box');
    logBox.classList.remove('hidden');
});