// You can specify which plugins you need
//import { Tooltip, Toast, Popover } from 'bootstrap';
//import {Collapse} from 'bootstrap/dist/css/bootstrap.min.css';

//import './normalize.css';
//import './style.css';
//import loadHome from './module/home';

//import { Collapse } from '../node_modules/bootstrap/js/dist/collapse';

console.log('new todo list 2');
//loadHeader();

//DOM CONTROL
/*
var buttons = document.querySelectorAll('.btn')
buttons.forEach(function (button) {
  var button = new bootstrap.Button(button)
  button.toggle()
})
*/

const newTaskBtn = document.querySelector('#add-task-btn');
newTaskBtn.addEventListener('click', () => {
    newTaskBtn.classList.add('visually-hidden');
    document.querySelector('.task-submit').classList.remove('visually-hidden')
});

/*

/*
function clear() {
    const container = document.getElementById('content');
    let conLength = container.children.length;

    // remove each element other than header
    while (conLength > 1) {
        container.removeChild(container.children[1])
        conLength--;
    } 
}

// Header buttons
const logoBtn = document.querySelector('.logo');
logoBtn.onclick = () => {
    clear();
    loadHome();
    loadFooter();
    initFooterBtn()
};
*/
