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




//let allProjects = []

let allProjects = [
    {name: 'Default',
    description: 'Big time default',
    todo: [
        {taskName: "default todo", date: "2021-01-19", priority: "3", checked: false},
    ],
    active: true,
    },
    {name: 'Test',
    description: 'Testing out the project bud',
    todo: [
        {taskName: "first todo", date: "2021-01-19", priority: "1", checked: false},
        {taskName: "aa", date: "2021-01-19", priority: "1", checked: false},
        {taskName: "bb", date: "2021-01-19", priority: "2", checked: true},
        {taskName: "cc", date: "2021-01-19", priority: "3", checked: false},
    ],
    active: false,
    },
]







const newProject = (name, description) => {
    allProjects.push({
    name,
    description,
    todo: [],
    active: true,
    })

}
//newProject('Test', 'Testing out the project')


//when his save on new project button
function addNewProject() {
    let name = getAddProjectValues().name;
    let desc = getAddProjectValues().desc;



    newProject(name, desc);
    addProjectToDOM(name);
    loadProject(name, desc);
    
    console.log(allProjects);
}


function clearActiveProjects(){
    allProjects.forEach(project => project.active = false);
}



//put project into task area
const loadProject = (name, description) => {
    const projectName = document.querySelector('div.project-info h1.display-1')
    const projectDescription = document.querySelector('div.project-info p.task-description')

    projectName.textContent = name;
    projectDescription.textContent = description;


    const projectNameEdit = document.querySelector('#project-title')
    const projectDescriptionEdit = document.querySelector('#project-description')

    projectNameEdit.placeholder = name;
    projectDescriptionEdit.placeholder = description;

    //renderTasks()
}

function searchActive () {
    /*
    allProjects.forEach(project => {
        for (const [key, value] of Object.entries(project)) {
            console.log(`${key}: ${value}`)};
    })
    */
    for (let i = 0; i < allProjects.length; i++) {
        const element = allProjects[i];
        if (element.active === true) {
            return  i;
        }
    }
}

function renderProjects() {
    allProjects.forEach(project => {
        addProjectToDOM(project.name)
    })

}

const getAddProjectValues = () => {
    const name = document.querySelector('#new-title').value
    const desc = document.querySelector('#new-description').value
    
    return {name, desc}
}


//addProjectToDOM('Clean');
function addProjectToDOM(name) {
    const categories = document.querySelector('.categories');
    let x = categories.childElementCount;

    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('data-value', x);
    projectDiv.classList.add('item');
    //variable text content
    projectDiv.textContent = name;


    categories.appendChild(projectDiv);
}

function clearProjectsDOM() {
    const categories = document.querySelector('.categories');
    while (categories.firstChild) {
        categories.removeChild(categories.firstChild);
    }
}

//********** ---------- TASK CREATION ----------********** /**/

const taskList = [
    {taskName: "aa", date: "2021-01-19", priority: "1", checked: false},
    {taskName: "bb", date: "2021-01-19", priority: "2", checked: true},
    {taskName: "cc", date: "2021-01-19", priority: "3", checked: false}
];



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

function createNewTask() {
    let taskName = addTaskForm.getTask().taskName;
    let date = addTaskForm.getTask().date;
    let priority = addTaskForm.getTask().priority;
    let checked = addTaskForm.getTask().checked;

    taskList.push(addTaskForm.getTask());
    addTaskToDOM(taskName, date, priority, checked);

    console.log(taskList);
}

function clearTasksDOM() {
    const tasks = document.querySelectorAll('.todo');
    tasks.forEach(t => document.querySelector('.todo-container').removeChild(t));
}

function renderTasks(list) {
    list.forEach(task => {
        addTaskToDOM(task.taskName, task.date, task.priority, task.checked)
    });
}
/*
function renderTasks() {
    taskList.forEach(task => {
        addTaskToDOM(task.taskName, task.date, task.priority, task.checked)
    });
}
*/

//renderTasks()
renderProjects()


// **********---------- DOM CONTROL ----------********** /**/



//
// PROJECT ITEM CONTROL **********
//DYNAMIC
const cat = document.querySelector('.categories');
cat.addEventListener('click', (e) => {
    if (!e.target) { return; }
    if (e.target.matches('.item')) {
        const categoryItem = document.querySelectorAll('.item');
        for (let i = 0; i<categoryItem.length; i++) {
            categoryItem[i].classList.remove('select')
        }
        e.target.classList.add('select');

        let dataVal = e.target.dataset.value;
        let specificProject = allProjects[dataVal];

        clearActiveProjects()
        specificProject.active = true;


        clearTasksDOM()
        renderTasks(specificProject.todo);

        //console.log(specificProject.todo)
    }

})

/*
//moved to dynamic
const categoryItem = document.querySelectorAll('.item');
categoryItem.forEach(item => item.addEventListener('click', () => {
    for (let i = 0; i<categoryItem.length; i++) {
        categoryItem[i].classList.remove('select')
    }
    //console.log(categoryItem);
    item.classList.add('select');
}))
*/
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



// EDIT PROJECT  INFO BUTTONS **********
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



// ADD TASK FORM BUTTONS **********
const newTaskBtn = document.querySelector('#add-task-btn');
newTaskBtn.onclick = () => {
    newTaskBtn.classList.add('visually-hidden');
    document.querySelector('.task-submit').classList.remove('visually-hidden')
};

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


/*
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
