async function getTasks(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    };

    fetch('https://salty-meadow-29857.herokuapp.com/api/tasks/get', options)
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