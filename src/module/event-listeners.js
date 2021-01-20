//********** PROJECT CONTROL **********

//click outside of edit, closes all edits
const _closeAllEdit = () => {
    const a = document.querySelector('.task-heading');
    const b = document.querySelector('.task-heading.edit');
    a.classList.remove('visually-hidden');
    b.classList.add('visually-hidden');

    const c = document.querySelector('#add-task-btn');
    const d = document.querySelector('form.task-submit');
    c.classList.remove('visually-hidden');
    d.classList.add('visually-hidden');

    const e = document.querySelector('#new-project-btn');
    const f = document.querySelector('.sub-heading-edit');
    e.disabled = false;
    f.classList.add('visually-hidden');
}

const _clearNewProjectInput = () => {
    document.querySelector("#new-title").value = '';
    document.querySelector("#new-description").value = '';
};

const projectListeners = () => {

    const cat = document.querySelector('.categories');
    cat.addEventListener('click', (e) => {
        if (!e.target) { return; }
        if (e.target.matches('.item')) {
            const categoryItem = document.querySelectorAll('.item');
            //remove selected from all projects ,then add to clicked project
            for (let i = 0; i<categoryItem.length; i++) {
                categoryItem[i].classList.remove('select');
            }
            e.target.classList.add('select');

            let dataVal = e.target.dataset.value;
            let specificProject = allProjects[dataVal];

            clearActiveProjects();
            specificProject.active = true;

            clearTasksDOM();
            renderTasks(specificProject.todo);

            //populate heading from specific project
            loadProjectHeader(allProjects[searchActive()].name, allProjects[searchActive()].description);

            _closeAllEdit();
        };

    });

    const newProjectBtn = document.getElementById('new-project-btn');
    newProjectBtn.addEventListener('click', () => {
        document.querySelector('.sub-heading-edit').classList.toggle('visually-hidden');
        newProjectBtn.toggleAttribute('disabled');
    });

    const saveNewBtn = document.getElementById('save-new-btn');
    saveNewBtn.addEventListener('click', () => {
        document.querySelector('.sub-heading-edit').classList.toggle('visually-hidden');
        newProjectBtn.toggleAttribute('disabled');

        clearActiveProjects();

        //clear select class in DOM
        const items = document.querySelectorAll('.item');
        items.forEach(i => {i.classList.remove('select')});

        addNewProject();
        loadActive();
        _clearNewProjectInput();
    });

    const cancelNewBtn = document.getElementById('cancel-new-btn');
    cancelNewBtn.addEventListener('click', () => {
        document.querySelector('.sub-heading-edit').classList.toggle('visually-hidden');
        newProjectBtn.toggleAttribute('disabled');

        _clearNewProjectInput();
    });
};


// ********** TO-DO CONTROL **********
const _clearEditInput = () => {
    document.querySelector("#project-title").value = '';
    document.querySelector("#project-description").value = '';
};

const todoListeners = () => {

    //CHECKBOXES
    const con = document.querySelector('#content');
    con.addEventListener('click', (e) => {
        if (!e.target) { return; }
        if (e.target.matches('.form-check-input')) {

            e.target.parentElement.querySelector('p').classList.toggle('complete');

            //get value of clicked div to correspond to its spot in tasklist
            let a = e.target.parentElement.dataset.value;

            //change checked value when clicked 
            allProjects[searchActive()].todo[a].checked = e.target.checked;

            _closeAllEdit();
        };
    });

    //EDIT HEADER BUTTONS
    const editProjectBtn = document.getElementById('edit-project-btn');
    editProjectBtn.addEventListener('click', () => {

        const p = document.querySelectorAll('.task-heading');
        p.forEach(x => x.classList.toggle('visually-hidden'));

        loadEdit();
    });

    const saveEditBtn = document.querySelector('#save-edit-btn');
    saveEditBtn.addEventListener('click', () => {

    const p = document.querySelectorAll('.task-heading');
    p.forEach(x => x.classList.toggle('visually-hidden'));

    editProjectHeader();
    loadActive();
    _clearEditInput();
    });

    const cancelEditBtn = document.querySelector('#cancel-edit-btn');
    cancelEditBtn.addEventListener('click', () => {

    const p = document.querySelectorAll('.task-heading');
    p.forEach(x => x.classList.toggle('visually-hidden'));

        _clearEditInput();
    });

    //ADD TO-DO -- FORM BUTTONS
    const newTaskBtn = document.querySelector('#add-task-btn');
    newTaskBtn.onclick = () => {
        newTaskBtn.classList.add('visually-hidden');
        document.querySelector('.task-submit').classList.remove('visually-hidden');
    };

    const cancelTaskBtn = document.querySelector('#cancel-btn');
    cancelTaskBtn.addEventListener('click', () => {
        newTaskBtn.classList.remove('visually-hidden');
        document.querySelector('.task-submit').classList.add('visually-hidden');
    });

    const submitTaskBtn = document.querySelector('#submit-task-btn');
    submitTaskBtn.addEventListener('click', (e) => {
        //stop empty task add
        if (!addTaskForm.getTask().taskName) return;
        //prevent page refresh on submit
        e.preventDefault();

        newTaskBtn.classList.remove('visually-hidden');
        document.querySelector('.task-submit').classList.add('visually-hidden');

        createNewTask();

        //reset form bc prevented default operations
        document.querySelector(".task-submit").reset();
    });

    const optionsBtn = document.querySelector('#options-btn');
    optionsBtn.addEventListener('click', () => {
        document.querySelector('.form-features').classList.toggle('visually-hidden');
    });
};

export default {todoListeners, projectListeners};