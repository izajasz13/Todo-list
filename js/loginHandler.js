var token = '';
const loginBox = document.querySelector('.login-box');
const taskBox = document.querySelector('.task-box');
const loginButton = loginBox.querySelector('.button');

loginButton.addEventListener('click', async () => {
    const err = loginBox.querySelector('h5');
    if(err)loginBox.removeChild(err);
    const email = loginBox.querySelector('.email').value;
    const password = loginBox.querySelector('.password').value;
    const data = {
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

    fetch('http://localhost:3000/api/user/login', options)
        .then(handleErrors)
        .then(async (response) => {
            const res = await response.json();
            token = res.token;
            await getTasks();
            loginBox.classList.add('hidden');
            taskBox.classList.remove('hidden');
        })
        .catch(async (error) => {
            const message = document.createElement('h5')
            message.innerText = 'Wrong data';
            message.style.color = 'red';
            loginBox.insertBefore(message, loginButton.parentNode);
            loginBox.classList.add('error');
        });
});


