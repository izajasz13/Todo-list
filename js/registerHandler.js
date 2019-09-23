var token = '';
const registerBox = document.querySelector('.register-box');
const registerButton = registerBox.querySelector('.button');

registerButton.addEventListener('click', async () => {
    const err = registerBox.querySelector('h5');
    if(err)registerBox.removeChild(err);
    const name = registerBox.querySelector('.name').value;
    const email = registerBox.querySelector('.email').value;
    const password = registerBox.querySelector('.password').value;

    const data = {
        name,
        email,
        password
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch('http://localhost:3000/api/user/register', options)
        .then(handleErrors)
        .then(async (response) => {
            const res = await response.json();
            registerBox.classList.add('hidden');
            loginBox.classList.remove('hidden');
        })
        .catch(async (error) => {
            const message = document.createElement('h5')
            message.innerText = 'Wrong data';
            message.style.color = 'red';
            registerBox.insertBefore(message, registerButton.parentNode);
            registerBox.classList.add('error');
        });
});