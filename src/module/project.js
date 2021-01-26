import {allProjects} from '../index';
import {renderTasks, clearTasksDOM} from './task';

//********** ---------- PROJECT CREATION ----------**********

const newProject = (name, description) => {
    allProjects.push({
    name,
    description,
    todo: [],
    active: true,
    })

};

const addNewProject = () => {
    let name = _getAddProjectValues().name;
    let desc = _getAddProjectValues().desc;

    //push project to array
    newProject(name, desc);
    //create project in left side list
    _addProjectToDOM(name, true);
    //push project info to task heading
    loadProjectHeader(name, desc);
};

const deleteProject = (x) => {
    allProjects.splice(x, 1);
    return;
}

const _getAddProjectValues = () => {
    const name = document.querySelector('#new-title').value;
    const desc = document.querySelector('#new-description').value;
    
    return {name, desc};
};

const renderProjects = () => {
    allProjects.forEach(project => {
        _addProjectToDOM(project.name, project.active);
    });
};

const _addProjectToDOM = (name, active) => {
    const categories = document.querySelector('.categories');
    let x = categories.childElementCount;

    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('data-value', x);
    projectDiv.classList.add('item');
    //variable text content
    projectDiv.textContent = name;
    
    const trashBtnRed = `<button type="button" class="btn btn-outline-danger no-border delete-btn visually-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
    </button>`

    const trashBtnWhite = `<button type="button" class="btn btn-outline-light no-border delete-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
    </button>`
    
    categories.appendChild(projectDiv);
    if (!active) {
        projectDiv.insertAdjacentHTML("beforeend", trashBtnRed);
    } else {
        projectDiv.insertAdjacentHTML("beforeend", trashBtnWhite);
    }
};

const clearActiveProjects = () =>{
    //clear all active in array
    allProjects.forEach(project => project.active = false);
};

//put project into task area
const loadProjectHeader = (name, description) => {
    const projectName = document.querySelector('div.project-info h1.display-1');
    const projectDescription = document.querySelector('div.project-info p.task-description');

    projectName.textContent = name;
    projectDescription.textContent = description;


    const projectNameEdit = document.querySelector('#project-title');
    const projectDescriptionEdit = document.querySelector('#project-description');

    projectNameEdit.placeholder = name;
    projectDescriptionEdit.placeholder = description;
}

const editProjectHeader = () => {
    const editTitle = document.querySelector('#project-title');
    const editDescription = document.querySelector('#project-description');

    //empty field, return
    if (editTitle.value === '') {return};

    //change it in the DOM
    loadProjectHeader(editTitle.value, editDescription.value );

    //change it in the array
    allProjects[searchActive()].name = editTitle.value;
    allProjects[searchActive()].description = editDescription.value;

    //change it on the project side
    clearProjectsDOM();
    renderProjects();
}

const loadEdit = () => {    
    const editTitle = document.querySelector('#project-title');
    const editDescription = document.querySelector('#project-description');

    editTitle.value = allProjects[searchActive()].name;
    editDescription.value = allProjects[searchActive()].description;
};

const searchActive = () => {
    for (let i = 0; i < allProjects.length; i++) {
        const element = allProjects[i];
        if (element.active === true) {
            return  i;
        };
    };
};

const  loadActive = () => {
    clearTasksDOM();
    //add select css
    document.querySelector('.categories').children[searchActive()].classList.add('select');
    //load heading
    loadProjectHeader(allProjects[searchActive()].name, allProjects[searchActive()].description);
    //load tasks
    renderTasks(allProjects[searchActive()].todo);

    //add function for loading trashcan white
};

const clearProjectsDOM = () => {
    const categories = document.querySelector('.categories');
    while (categories.firstChild) {
        categories.removeChild(categories.firstChild);
    };
};

export {
    renderProjects,
    addNewProject,
    deleteProject, 
    clearActiveProjects, 
    loadProjectHeader, 
    editProjectHeader, 
    loadEdit, 
    searchActive, 
    loadActive,
    clearProjectsDOM,
};