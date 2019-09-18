const infos = document.querySelectorAll('.info');
const adds = document.querySelectorAll('.add');
const box = document.querySelector('box');

function infoPopUp(e){
    const name = e.target.parentNode.parentNode.querySelector('.name').innerText;
    const popUpBox = document.createElement('div');
    popUpBox.setAttribute('class', "popUpBox box");
    popUpBox.innerHTML = `
        <div class="cross"></div>
        <h2>More info about ${name}</h2>
        <div class="description">
            <span class="date-info">21.08.2019</span>
            <div class="more-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </div>
        </div>       
    `;
    document.body.insertBefore(popUpBox, box);
    const cross = popUpBox.querySelector('.cross');
    cross.addEventListener('click', () => document.body.removeChild(popUpBox));    
}

function addPopUp(e){
    const name = e.target.parentNode.parentNode.querySelector('.name').innerText;
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
}

infos.forEach(e => e.addEventListener('click', infoPopUp));
adds.forEach(e => e.addEventListener('click', addPopUp));