function updateTasks(){
const data = {
    taskList: tasks
};
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'auth-token': token
    },
    body: JSON.stringify(data)
};
fetch('https://salty-meadow-29857.herokuapp.com/api/tasks/post', options)
    .then(handleErrors)
    .then(async (response) => {
        //const res = await response.json();
    })
    .catch(async (error) => {
        console.log(error);
    });
}