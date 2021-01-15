
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
            const cancelBtn = document.createElement('button');
                cancelBtn.type = 'reset';
                cancelBtn.classList.add('btn');
                cancelBtn.classList.add('btn-outline-dark');
                cancelBtn.classList.add('center-obj');
                cancelBtn.setAttribute('id', 'cancel-edit-btn');
                cancelBtn.textContent = 'Cancel';
            const saveBtn = document.createElement('button');
                saveBtn.type = 'submit';
                saveBtn.classList.add('btn');
                saveBtn.classList.add('btn-outline-dark');
                saveBtn.setAttribute('id', 'save-edit-btn');
                saveBtn.textContent = 'Save';

    const divider = document.createElement('div');
    divider.classList.add('divider');

    const todoContain = document.createElement('div');
    todoContain.classList.add('todo-container');

    const addTaskBtn = document.createElement('button');
        addTaskBtn.type = 'button';
        addTaskBtn.classList.add('btn');
        addTaskBtn.classList.add('btn-outline-dark');
        addTaskBtn.setAttribute('id', 'add-task-btn');
        const iconPlus = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
      </svg>`;
        addTaskBtn.textContent = ' Add Task';

    const taskSubmit = document.createElement('form');
    taskSubmit.classList.add('task-submit');
    taskSubmit.classList.add('visually-hidden');
        const nameContain = document.createElement('div');
        nameContain.classList.add('mb-3');
                const nameTask = document.createElement('input');
                nameTask.type = 'text';
                nameTask.classList.add('form-control');
                nameTask.setAttribute('id', 'task-name');
                nameTask.placeholder = 'New Task';
                nameTask.required = true;
        const formFeatures = document.createElement('div');
        formFeatures.classList.add('form-features');
        formFeatures.classList.add('visually-hidden');
            const dateContainer = document.createElement('div');
            dateContainer.classList.add('feat')
            dateContainer.classList.add('center-obj')
                const dateInput = document.createElement('input');
                dateInput.type = 'date';
                dateInput.classList.add('form-control');
                dateInput.setAttribute('id', 'date-select');
            const priorityContainer = document.createElement('div');
            priorityContainer.classList.add('input-group')
            priorityContainer.classList.add('feat')
                const divIcon = document.createElement('div');
                divIcon.classList.add('input-group-text');
                    const iconFlag = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag" viewBox="0 0 16 16">
                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"></path>
                </svg>`;
                const selectionDiv = document.createElement('select');
                selectionDiv.classList.add('form-select');
                selectionDiv.setAttribute('id', 'priority-select');
                    const one = document.createElement('option');
                        one.value = 1;
                        one.selected = true;
                        one.textContent = 'Low';
                    const two = document.createElement('option');
                        two.value = 2;
                        two.textContent = 'Medium';
                    const three = document.createElement('option');
                        three.value = 3;
                        three.textContent = 'High';


        const formBtns = document.createElement('div');
        formBtns.classList.add('form-btn-container');
            const optnBtnContainer = document.createElement('div');
            optnBtnContainer.classList.add('opt-btn');
                const optnBtn = document.createElement('button');
                optnBtn.type = 'button';
                optnBtn.classList.add('btn');
                optnBtn.classList.add('btn-outline-dark');
                optnBtn.setAttribute('id', 'options-btn');
                optnBtn.textContent = 'Options';
            const fBtnContainer = document.createElement('div');
            fBtnContainer.classList.add('form-btns');
                const cancelTaskBtn = document.createElement('button');
                    cancelTaskBtn.type = 'reset';
                    cancelTaskBtn.classList.add('btn');
                    cancelTaskBtn.classList.add('btn-outline-dark');
                    cancelTaskBtn.classList.add('center-obj');
                    cancelTaskBtn.setAttribute('id', 'cancel-btn');
                    cancelTaskBtn.textContent = 'Cancel';
                const submitTaskBtn = document.createElement('button');
                    submitTaskBtn.type = 'submit';
                    submitTaskBtn.classList.add('btn');
                    submitTaskBtn.classList.add('btn-outline-dark');
                    submitTaskBtn.setAttribute('id', 'submit-task-btn');
                    submitTaskBtn.textContent = 'Add Task';




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
            formBtnContainer.appendChild(cancelBtn);
            formBtnContainer.appendChild(saveBtn);
    project.appendChild(divider);
    project.appendChild(todoContain);
    project.appendChild(addTaskBtn);
        addTaskBtn.insertAdjacentHTML("afterbegin", iconPlus);
    project.appendChild(taskSubmit);
        taskSubmit.appendChild(nameContain);
            nameContain.appendChild(nameTask);
        taskSubmit.appendChild(formFeatures);
            formFeatures.appendChild(dateContainer);
                dateContainer.appendChild(dateInput);
            formFeatures.appendChild(priorityContainer);
                priorityContainer.appendChild(divIcon);
                    divIcon.insertAdjacentHTML("beforeend", iconFlag);
                priorityContainer.appendChild(selectionDiv);
                    selectionDiv.appendChild(one);
                    selectionDiv.appendChild(two);
                    selectionDiv.appendChild(three);
        taskSubmit.appendChild(formBtns);
            formBtns.appendChild(optnBtnContainer);
                optnBtnContainer.appendChild(optnBtn);
            formBtns.appendChild(fBtnContainer);
                fBtnContainer.appendChild(cancelTaskBtn);
                fBtnContainer.appendChild(submitTaskBtn);
}

//addProjectToDOM('Test', 'Test description')