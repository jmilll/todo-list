// You can specify which plugins you need
//import { Tooltip, Toast, Popover } from 'bootstrap';
//import {Collapse} from 'bootstrap/dist/css/bootstrap.min.css';

//import './normalize.css';
//import './style.css';
//import loadHome from './module/home';

//import { Collapse } from '../node_modules/bootstrap/js/dist/collapse';

//import collapse from '../node_modules/bootstrap/js/dist/collapse';
//import '../node_modules/bootstrap/js/dist/collapse';

console.log('new todo list 2');
//loadHeader();

//********** ---------- TASK CREATION ----------********** /**/




/*
function createTestTask() {const todoContainer = document.querySelector('.todo-container');
    const newTodo = document.createElement('div');
    newTodo.setAttribute('class', 'todo');
    //value needs to be variable
    newTodo.setAttribute('data-value', '0');

    const checkbox = document.createElement('input');
    checkbox.classList.add('form-check-input');
    checkbox.type = 'checkbox';
    checkbox.value = '';
    checkbox.setAttribute('aria-label', 'Checkbox for following text input');


    const taskTitle = document.createElement('p');
    taskTitle.classList.add('todo-title');
    //text needs to be variable
    taskTitle.textContent = 'test content';

    const taskDate = document.createElement('p');
    taskDate.classList.add('todo-date');
    //text needs to be variable
    taskDate.textContent = '12/12/20';

    const taskPriority = document.createElement('p');
    taskPriority.classList.add('todo-priority');
    //text needs to be variable
    taskPriority.textContent = 'High';

    todoContainer.appendChild(newTodo);
    newTodo.appendChild(checkbox);
    newTodo.appendChild(taskTitle)
    newTodo.appendChild(taskDate)
    newTodo.appendChild(taskPriority);
}*/
const todoItem = (taskName, date, priority, checked) => {
    return { 
        taskName, 
        date,
        priority,
        checked, 
    };
};

function createTask(taskName, date, priority, checked) {
    
    const todoContainer = document.querySelector('.todo-container');
    const newTodo = document.createElement('div');
    newTodo.setAttribute('class', 'todo');
    //value needs to be variable
    newTodo.setAttribute('data-value', (taskList.length -1));

    const checkbox = document.createElement('input');
    checkbox.classList.add('form-check-input');
    checkbox.type = 'checkbox';
    checkbox.value = '';
    checkbox.checked = checked;
    checkbox.setAttribute('aria-label', 'Checkbox for following text input');


    const taskTitle = document.createElement('p');
    taskTitle.classList.add('todo-title');
    taskTitle.textContent = taskName;

    const taskDate = document.createElement('p');
    taskDate.classList.add('todo-date');
    taskDate.textContent = date;

    const taskPriority = document.createElement('p');
    taskPriority.classList.add('todo-priority');
    taskPriority.textContent = priority;

    todoContainer.appendChild(newTodo);
    newTodo.appendChild(checkbox);
    newTodo.appendChild(taskTitle)
    newTodo.appendChild(taskDate)
    newTodo.appendChild(taskPriority);
}

const taskList = [];

const addTaskForm = (() => {
    const _name = document.querySelector('#task-name')
    const _date= document.querySelector('#date-select')
    const _priority = document.querySelector('#priority-select')

    //Get value of form inputs
    const _getValue = () => {
        let taskName = _name.value;
        let date = _date.value;
        let priority = _priority.value;
        let checked = false;

        return {taskName, date, priority, checked};
        
    }


    const getTask = () => {
       return _getValue();
    }

    //todoItem(taskName, taskDescription, date, priority);


    return {
        _getValue,
        getTask,
    }
})();

function createNewTask () {
    let taskName = addTaskForm.getTask().taskName;
    let date = addTaskForm.getTask().date;
    let priority = addTaskForm.getTask().priority;
    let checked = addTaskForm.getTask().checked;

    taskList.push(addTaskForm.getTask());
    createTask(taskName, date, priority, checked);

    console.log(taskList);
}

//if (!title.value || !author.value || !pages.value) return;


/*
return taskList;
taskList.push(addTaskForm.getTask())

addTaskForm._getValue()
addTaskForm.getTask()

addTaskForm.getTask().date

const todoItem = (taskName, taskDescription, date, priority) => {
    return { 
        taskName,
        taskDescription, 
        date,
        priority, 
    };
};
let itemOne = todoItem('Walk the dog','','','low');
console.log(itemOne);
*/


// **********---------- DOM CONTROL ----------********** /**/



//
// CATEGORY ITEM CONTROL **********
const categoryItem = document.querySelectorAll('.item');
categoryItem.forEach(item => item.addEventListener('click', () => {
    for (let i = 0; i<categoryItem.length; i++) {
        categoryItem[i].classList.remove('select')
    }
    //console.log(categoryItem);
    item.classList.add('select');
}))

const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', () => {
    document.querySelector('.sub-heading-edit').classList.toggle('visually-hidden');
    newProjectBtn.toggleAttribute('disabled');
});

const saveNewBtn = document.getElementById('save-new-btn');
saveNewBtn.addEventListener('click', () => {
    document.querySelector('.sub-heading-edit').classList.toggle('visually-hidden');
    newProjectBtn.toggleAttribute('disabled');

    console.log('add-new-project');
});

const cancelNewBtn = document.getElementById('cancel-new-btn');
cancelNewBtn.addEventListener('click', () => {
    document.querySelector('.sub-heading-edit').classList.toggle('visually-hidden');
    newProjectBtn.toggleAttribute('disabled');

    console.log('cancel-new-project');
});

//
// EDIT PROJECT INFO BUTTONS **********
const editProjectBtn = document.getElementById('edit-project-btn');
editProjectBtn.addEventListener('click', () => {

    const p = document.querySelectorAll('.task-heading');
    p.forEach(x => x.classList.toggle('visually-hidden'));
});

const saveEditBtn = document.querySelector('#save-edit-btn');
saveEditBtn.addEventListener('click', () => {

   // if (!task-name.value) return;

   const p = document.querySelectorAll('.task-heading');
   p.forEach(x => x.classList.toggle('visually-hidden'));

    console.log('save edit');
});

const cancelEditBtn = document.querySelector('#cancel-edit-btn');
cancelEditBtn.addEventListener('click', () => {

   // if (!task-name.value) return;

   const p = document.querySelectorAll('.task-heading');
   p.forEach(x => x.classList.toggle('visually-hidden'));

    console.log('cancel edit');
});


//
// TASK DOM EVENTS **********

//--DYNAMICALLY SELECT BUTTONS INCLUDING ONES THAT ARE NOT CREATED--
const con = document.querySelector('#content');
con.addEventListener('click', (e) => {
    if (!e.target) { return; }
    if (e.target.matches('.form-check-input')) {
        console.log(e.target.checked);
        e.target.parentElement.querySelector('p').classList.toggle('complete');
    }

})
/* without dynamic
const taskCheckBoxes2 = document.querySelectorAll('div.todo input.form-check-input');
taskCheckBoxes2.forEach(box => box.addEventListener('click', () => {
    //box.classList.toggle('checked');
    box.parentElement.querySelector('p').classList.toggle('complete');
    console.log('checkme2');
}))
*/
const taskCheckBoxes = document.querySelectorAll('div.todo div.checkbox');
taskCheckBoxes.forEach(box => box.addEventListener('click', () => {
    box.classList.toggle('checked');
    box.parentElement.querySelector('p').classList.toggle('complete');
    console.log('checkme');
}))







//
// ADD TASK FORM BUTTONS **********
const newTaskBtn = document.querySelector('#add-task-btn');
newTaskBtn.addEventListener('click', () => {
    newTaskBtn.classList.add('visually-hidden');
    document.querySelector('.task-submit').classList.remove('visually-hidden')
});

const cancelTaskBtn = document.querySelector('#cancel-btn');
cancelTaskBtn.addEventListener('click', () => {
    newTaskBtn.classList.remove('visually-hidden');
    document.querySelector('.task-submit').classList.add('visually-hidden')
});

const submitTaskBtn = document.querySelector('#submit-task-btn');
submitTaskBtn.addEventListener('click', () => {
    //stop empty task add
   if (!addTaskForm.getTask().taskName) return;

    newTaskBtn.classList.remove('visually-hidden');
    document.querySelector('.task-submit').classList.add('visually-hidden')

    console.log('submit form');
});

const optionsBtn = document.querySelector('#options-btn');
optionsBtn.addEventListener('click', () => {
    document.querySelector('.form-features').classList.toggle('visually-hidden')
});




// ---------- OBJECT CREATION  ---------- /**/




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