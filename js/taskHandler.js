const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const form = document.querySelector('.add-task');
const list = document.querySelector('.tasks');

function addTask(e){
    e.preventDefault();
    const text = this.querySelector('.bar').value;
    const task = {
        text,
        done: false,
        date: '',
        info: ''
    };
    tasks.push(task);
    populateList(tasks, list);
    const infIco = document.querySelectorAll('.info');
    const adIco = document.querySelectorAll('.add');
    adIco.forEach(e => e.addEventListener('click', addPopUp));
    infIco.forEach(e => e.addEventListener('click', infoPopUp));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.reset();
}

function populateList(items = [], itemsList){
    itemsList.innerHTML = items.map((item, i) => {
        const icon = (item.date || item.info) ? '<i class="fas fa-info info"></i>' : '<i class="fas fa-plus add"></i>';
        return `
            <li class="task">
                <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}/>
                <label for="item${i}"><span class="name">${item.text}</span></label>
                <span class="icons">${icon}</span>
            </li>
        `;
    }).join('');    
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const ele = e.target;
    const index = ele.dataset.index;
    tasks[index].done = !tasks[index].done;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    populateList(tasks, list);
    const infIco = document.querySelectorAll('.info');
    const adIco = document.querySelectorAll('.add');
    adIco.forEach(e => e.addEventListener('click', addPopUp));
    infIco.forEach(e => e.addEventListener('click', infoPopUp));
}

form.addEventListener('submit', addTask);
list.addEventListener('click', toggleDone);

populateList(tasks, list)