
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
    //value needs to be variable
    newTodo.setAttribute('data-value', y);
    //console.log(y);

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

function renderTasks() {
    taskList.forEach(task => {
        addTaskToDOM(task.taskName, task.date, task.priority, task.checked)
    });
}

const taskList = [
    {taskName: "aa", date: "2021-01-19", priority: "1", checked: false},
    {taskName: "bb", date: "2021-01-19", priority: "2", checked: true},
    {taskName: "cc", date: "2021-01-19", priority: "3", checked: false}
];


function taskHandle() {
    //createMain()
    //createCopy() 
}

//export default taskHandle; renderTasks;