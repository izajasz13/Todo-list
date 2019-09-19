const box = document.querySelector('box');
const infos = document.querySelectorAll('.info');
const adds = document.querySelectorAll('.add');

function updateData(e, index){
    const date = e.target.parentNode.querySelector('.add-date');
    const info = e.target.parentNode.querySelector('textarea');
    const box = e.target.parentNode.parentNode;
    tasks[index].date = date.value;
    tasks[index].info = info.value;
    populateList(tasks, list);
    const infIco = document.querySelectorAll('.info');
    const adIco = document.querySelectorAll('.add');
    adIco.forEach(e => e.addEventListener('click', addPopUp));
    infIco.forEach(e => e.addEventListener('click', infoPopUp));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.body.removeChild(box);
}

function infoPopUp(e){
    const li = e.target.parentNode.parentNode;
    const name = li.querySelector('.name').innerText;
    const index = li.querySelector('input').dataset.index;
    const popUpBox = document.createElement('div');
    popUpBox.setAttribute('class', "popUpBox box");
    popUpBox.innerHTML = `
        <div class="cross"></div>
        <h2>More info about ${name}</h2>
        <div class="description">
            <span class="date-info">${tasks[index].date}</span>
            <div class="more-info">
                ${tasks[index].info}
            </div>
        </div>       
    `;
    document.body.insertBefore(popUpBox, box);
    const cross = popUpBox.querySelector('.cross');
    cross.addEventListener('click', () => document.body.removeChild(popUpBox));    
}

function addPopUp(e){
    const li = e.target.parentNode.parentNode;
    const name = li.querySelector('.name').innerText;
    const index = li.querySelector('input').dataset.index;
    const popUpBox = document.createElement('div');
    popUpBox.setAttribute('class', "popUpBox box");
    popUpBox.innerHTML = `
        <div class="cross"></div>
        <h2>Insert info about ${name}</h2>
        <form class="add-info">
            <div class="add-date-box">
                <input class="add-date" type="date"></input>
            </div>
            <div class="add-description-box">
                <textarea class="add-description"></textarea>
            </div>
            <div class="save-button"><i class="fas fa-save"></i> save</div>
        </form>
    `;
    document.body.insertBefore(popUpBox, box);
    const cross = popUpBox.querySelector('.cross');
    cross.addEventListener('click', () => document.body.removeChild(popUpBox));
    const saveButton = popUpBox.querySelector('.save-button');
    saveButton.addEventListener('click', function(e){updateData(e, index)});
}

infos.forEach(e => e.addEventListener('click', infoPopUp));
adds.forEach(e => e.addEventListener('click', addPopUp));