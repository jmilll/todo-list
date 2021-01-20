import {allProjects} from '../index';
import {searchActive} from './project';

//********** ---------- TASK CREATION ----------**********
/*
const todoItem = (taskName, date, priority, checked) => {
    return { 
        taskName, 
        date,
        priority,
        checked, 
    };
};
*/
const _addTaskToDOM = (taskName, date, priority, checked) => {
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
    if (priority === '1') {
        taskPriority.classList.add('low');
    } else if (priority === '2') {
        taskPriority.classList.add('med');
    } else {
        taskPriority.classList.add('high');
    };

    todoContainer.appendChild(newTodo);
    newTodo.appendChild(checkbox);
    newTodo.appendChild(taskTitle);
    newTodo.appendChild(taskDate);
    newTodo.appendChild(taskPriority);
}
/* before packaging
const addTaskForm = (() => {
    const _name = document.querySelector('#task-name');
    const _date= document.querySelector('#date-select');
    const _priority = document.querySelector('#priority-select');

    //Get value of form inputs
    const _getValue = () => {
        let taskName = _name.value;
        let date = _date.value;
        let priority = _priority.value;
        let checked = false;
        return {taskName, date, priority, checked};
        
    };
    const getTask = () => {
       return _getValue();
    };

    return {
        getTask,
    };
})();
*/

//add addTaskFormExport for packaging bc of scope
const addTaskFormExport = () => {
    const taskName = document.querySelector('#task-name').value;
    const date = document.querySelector('#date-select').value;
    const priority = document.querySelector('#priority-select').value;
    const checked = false;
    
    return {taskName, date, priority, checked};
};





const createNewTask = () => {
    let taskName = addTaskFormExport().taskName;
    let date = addTaskFormExport().date;
    let priority = addTaskFormExport().priority;
    let checked = addTaskFormExport().checked;

    allProjects[searchActive()].todo.push(addTaskFormExport());
    _addTaskToDOM(taskName, date, priority, checked);
}

/*
const createNewTask = () => {
    let taskName = addTaskForm.getTask().taskName;
    let date = addTaskForm.getTask().date;
    let priority = addTaskForm.getTask().priority;
    let checked = addTaskForm.getTask().checked;

    allProjects[searchActive()].todo.push(addTaskForm.getTask());
    _addTaskToDOM(taskName, date, priority, checked);
}
*/
/*

*/
const clearTasksDOM = () => {
    const tasks = document.querySelectorAll('.todo');
    tasks.forEach(t => document.querySelector('.todo-container').removeChild(t));
};

const renderTasks = (list) => {
    list.forEach(task => {
        _addTaskToDOM(task.taskName, task.date, task.priority, task.checked);
    });
};

export {clearTasksDOM, renderTasks, createNewTask, addTaskFormExport };