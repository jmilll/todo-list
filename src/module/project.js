const newProject = (name, description) => {
    allProjects.push({
    name,
    description,
    todo: [],
    active: true,
    })

}

//when his save on new project button
function addNewProject() {
    let name = getAddProjectValues().name;
    let desc = getAddProjectValues().desc;

    //push project to array
    newProject(name, desc);
    //create project in left side list
    addProjectToDOM(name);
    //push project info to task heading
    loadProjectHeader(name, desc);
}


function clearActiveProjects(){
    //clear all active in array
    allProjects.forEach(project => project.active = false);
}



//put project into task area
const loadProjectHeader = (name, description) => {
    const projectName = document.querySelector('div.project-info h1.display-1')
    const projectDescription = document.querySelector('div.project-info p.task-description')

    projectName.textContent = name;
    projectDescription.textContent = description;


    const projectNameEdit = document.querySelector('#project-title')
    const projectDescriptionEdit = document.querySelector('#project-description')

    projectNameEdit.placeholder = name;
    projectDescriptionEdit.placeholder = description;
}

const editProjectHeader = () => {
    const editTitle = document.querySelector('#project-title')
    const editDescription = document.querySelector('#project-description')

    //empty field, return
    if (editTitle.value === '') {return};

    //change it in the DOM
    loadProjectHeader(editTitle.value, editDescription.value );

    //change it in the array
    allProjects[searchActive()].name = editTitle.value
    allProjects[searchActive()].description = editDescription.value

    //change it on the project side
    clearProjectsDOM()
    renderProjects()
}

const loadEdit = () => {    
    const editTitle = document.querySelector('#project-title')
    const editDescription = document.querySelector('#project-description')


    editTitle.value = allProjects[searchActive()].name
    editDescription.value = allProjects[searchActive()].description

}


function searchActive () {
    for (let i = 0; i < allProjects.length; i++) {
        const element = allProjects[i];
        if (element.active === true) {
            return  i;
        }
    }
}

function loadActive() {
    clearTasksDOM();
    //add select css
    document.querySelector('.categories').children[searchActive()].classList.add('select');
    //load heading
    loadProjectHeader(allProjects[searchActive()].name, allProjects[searchActive()].description);
    //load tasks
    renderTasks(allProjects[searchActive()].todo)
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

function loadHome() {
    createMain()
    createCopy() 
}

export default loadHome;