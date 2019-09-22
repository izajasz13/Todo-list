const loginBox = document.querySelector('.login-box');
const registerBox = document.querySelector('.register-box');
const taskBox = document.querySelector('.task-box');

const registerOnLogin = loginBox.querySelector('.register-button');

registerOnLogin.addEventListener('click', () => {
    loginBox.classList.add('hidden');
    registerBox.classList.remove('hidden');
});

const loginButton = loginBox.querySelector('.login-button');

loginButton.addEventListener('click', () => {
    loginBox.classList.add('hidden');
    taskBox.classList.remove('hidden');
});

const registerButton = registerBox.querySelector('.login-button');

registerButton.addEventListener('click', () => {
    registerBox.classList.add('hidden');
    taskBox.classList.remove('hidden');
});
