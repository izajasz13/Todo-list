const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const form = document.querySelector('.add-task');
const list = document.querySelector('.tasks');

function addTask(e){
    e.preventDefault();
    const text = this.querySelector('.bar').value;
    const task = {
        text,
        done: false
    };
    tasks.push(task);
    populateList(tasks, list);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.reset();
}

function populateList(items = [], itemsList){
    itemsList.innerHTML = items.map((item, i) => {
        return `
            <li class="task">
                <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}/>
                <label for="item${i}"><span class="name">${item.text}</span></label>
                <span class="icons"><i class="fas fa-info info"></i><i class="fas fa-plus add"></i></span>
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
    console.log('check');
}

form.addEventListener('submit', addTask);
list.addEventListener('click', toggleDone);

populateList(tasks, list)