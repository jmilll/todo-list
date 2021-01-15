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

//import renderTasks from './module/task-creation';
//********** ---------- PROJECTS  ----------********** /**/

let allProjects = []

const newProject = (name, description) => {
    allProjects.push({name,
    description,
    todo: [],
    active: true,
    })

    console.log(allProjects);
}
//newProject('Test', 'Testing out the project')

const addProjectToDOM = (name, description) => {
    const taskContainer = document.querySelector('.tasks-container');

    const project = document.createElement('div');
    project.classList.add('task');

    const heading = document.createElement('div');
    heading.classList.add('task-heading');
        const headingIfo = document.createElement('div');
        headingIfo.classList.add('project-info');
            const title = document.createElement('h1');
            title.classList.add('display-1');
            //content from project
            title.textContent = name;
            const desc = document.createElement('p');
            desc.classList.add('task-description');
            //content from project
            desc.textContent = description;
        const editInfoBtn = document.createElement('button');
        editInfoBtn.type = 'button';
        editInfoBtn.classList.add('btn');
        editInfoBtn.classList.add('btn-outline-dark');
        editInfoBtn.classList.add('no-border');
        editInfoBtn.setAttribute('id', 'edit-project-btn');
            const iconEdit = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
            </svg>`;


    const headingEdit = document.createElement('div');
    headingEdit.classList.add('task-heading');
    headingEdit.classList.add('edit');
    headingEdit.classList.add('visually-hidden');
        const projectTitleEdit = document.createElement('input');
            projectTitleEdit.type = 'text';
            projectTitleEdit.classList.add('form-control');
            projectTitleEdit.setAttribute('id', 'project-title');
            //content from project
            projectTitleEdit.placeholder = name;
            projectTitleEdit.required = true;
        const projectDescriptionEdit = document.createElement('input');
            projectDescriptionEdit.type = 'text';
            projectDescriptionEdit.classList.add('form-control');
            projectDescriptionEdit.setAttribute('id', 'project-description');
            //content from project
            projectDescriptionEdit.placeholder = description;
        const formBtnContainer = document.createElement('div');

    const divider = document.createElement('div');
    divider.classList.add('divider');

    const todoContain = document.createElement('div');
    todoContain.classList.add('todo-container');

    const addTaskBtn = document.createElement('button');


    const taskSubmit = document.createElement('form');



    taskContainer.appendChild(project);
    project.appendChild(heading);
        heading.appendChild(headingIfo);
            headingIfo.appendChild(title);
            headingIfo.appendChild(desc);
        heading.appendChild(editInfoBtn);
            editInfoBtn.insertAdjacentHTML("beforeend", iconEdit);
    project.appendChild(headingEdit);
        headingEdit.appendChild(projectTitleEdit);
        headingEdit.appendChild(projectDescriptionEdit);
        headingEdit.appendChild(formBtnContainer);
            formBtnContainer.appendChild();
            formBtnContainer.appendChild();
    project.appendChild(divider);
}



            /*const iconEdit = document.createElement('svg');
            iconEdit.xmlns = 'http://www.w3.org/2000/svg';
            iconEdit.setAttribute('width', '16')
            iconEdit.setAttribute('height', '16')*/

//********** ---------- TASK CREATION ----------********** /**/

const taskList = [
    {taskName: "aa", date: "2021-01-19", priority: "1", checked: false},
    {taskName: "bb", date: "2021-01-19", priority: "2", checked: true},
    {taskName: "cc", date: "2021-01-19", priority: "3", checked: false}
];

renderTasks()

const todoItem = (taskName, date, priority, checked) => {
    return { 
        taskName, 
        date,
        priority,
        checked, 
    };
};

function addTaskToDOM(taskName, date, priority, checked) {
    let y = document.querySelector('.todo-container').childElementCount;

    const todoContainer = document.querySelector('.todo-container');
    const newTodo = document.createElement('div');
    newTodo.setAttribute('class', 'todo');
    newTodo.setAttribute('data-value', y);

    const checkbox = document.createElement('input');
    checkbox.classList.add('form-check-input');
    checkbox.type = 'checkbox';
    checkbox.value = '';
    checkbox.checked = checked;
    checkbox.setAttribute('aria-label', 'Checkbox for following text input');


    const taskTitle = document.createElement('p');
    taskTitle.classList.add('todo-title');
    if (checked === true) {
        taskTitle.classList.add('complete');
    }
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

    return {
        getTask,
    }
})();

function createNewTask () {
    let taskName = addTaskForm.getTask().taskName;
    let date = addTaskForm.getTask().date;
    let priority = addTaskForm.getTask().priority;
    let checked = addTaskForm.getTask().checked;

    taskList.push(addTaskForm.getTask());
    addTaskToDOM(taskName, date, priority, checked);

    console.log(taskList);
}

function clearTasks() {
    const tasks = document.querySelectorAll('.todo');
    tasks.forEach(t => document.querySelector('.todo-container').removeChild(t));
}

function renderTasks() {
    taskList.forEach(task => {
        addTaskToDOM(task.taskName, task.date, task.priority, task.checked)
    });
}



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
//CHECKBOXES
const con = document.querySelector('#content');
con.addEventListener('click', (e) => {
    if (!e.target) { return; }
    if (e.target.matches('.form-check-input')) {
        console.log(e.target.checked);
        e.target.parentElement.querySelector('p').classList.toggle('complete');

        //get value of clicked div to correspond to its spot in tasklist
        let a = e.target.parentElement.dataset.value;

        //change checked value when clicked 
        taskList[a].checked = e.target.checked

        //console.log(taskList[a])
        //console.log()
    }

})

/* without dynamic
const taskCheckBoxes2 = document.querySelectorAll('div.todo input.form-check-input');
taskCheckBoxes2.forEach(box => box.addEventListener('click', () => {
    //box.classList.toggle('checked');
    box.parentElement.querySelector('p').classList.toggle('complete');
    console.log('checkme2');
}))

//not using dynamic
const taskCheckBoxes = document.querySelectorAll('div.todo div.checkbox');
taskCheckBoxes.forEach(box => box.addEventListener('click', () => {
    box.classList.toggle('checked');
    box.parentElement.querySelector('p').classList.toggle('complete');
    console.log('checkme');


    
}))*/







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
submitTaskBtn.addEventListener('click', (e) => {
    //stop empty task add
   if (!addTaskForm.getTask().taskName) return;
   //prevent page refresh on submit
   e.preventDefault();

    newTaskBtn.classList.remove('visually-hidden');
    document.querySelector('.task-submit').classList.add('visually-hidden')
    createNewTask();

    //reset form bc prevented default operations
    document.querySelector(".task-submit").reset();
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
