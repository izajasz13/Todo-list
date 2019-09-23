async function getTasks(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    };

    fetch('http://localhost:3000/api/tasks/get', options)
        .then(handleErrors)
        .then(async (response) => {
            const res = await response.json();
            tasks = res.list || [];
            populateList(tasks, list);
        })
        .catch(async (error) => {
            console.log(error);
        });
}