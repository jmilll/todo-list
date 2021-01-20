import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
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

todoListeners();
projectListeners();

// LOCAL STORAGE TASK SAVING
/*
//Test for local storage
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

// If theres local storage do this
if (storageAvailable('localStorage')) {
    restore();
  }
  else {
    alert('No local storage available for saving your to-do list :( you can add/remove, but changes will not appear upon refresh')
}

// NEED TO SET DATA EVERYTIME DATA IS CHANGED
// setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`allProjects`, JSON.stringify(allProjects));
}

//pulls books from local storage when page is refreshed
function restore() {
    if(!localStorage.allProjects) {
        renderProjects();
    }else {
        let objects = localStorage.getItem('allProjects') // gets information from local storage to use in below loop to create DOM/display
        let newObjects = JSON.parse(objects);
        allProjects = newObjects;
        renderProjects();
    }
}

// Clear all memory and return to demo
const resetButton = document.getElementById('memory-reset');
resetButton.addEventListener('click', clearMemory)

function clearMemory() {
    localStorage.clear();
    location.reload();
    return false;
}

*/
export {allProjects};