// You can specify which plugins you need
//import { Tooltip, Toast, Popover } from 'bootstrap';
//import {Collapse} from 'bootstrap/dist/css/bootstrap.min.css';

//import './normalize.css';
//import './style.css';
//import loadHome from './module/home';

//import { Collapse } from '../node_modules/bootstrap/js/dist/collapse';

//import collapse from '../node_modules/bootstrap/js/dist/collapse';
//import '../node_modules/bootstrap/js/dist/collapse';

console.log('new todo list p');
//loadHeader();

//import renderTasks from './module/task-creation';

import {todoListeners, projectListeners} from './module/event-listeners';
import {renderProjects, loadActive} from './module/project';


//let allProjects = [];

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
];


renderProjects();
loadActive();

export default {allProjects};