import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {todoListeners, projectListeners} from './module/event-listeners';
import {renderProjects, loadActive, loadProjectHeader} from './module/project';


//let allProjects = [];

let allProjects = [
    {name: 'Default Project',
    description: 'A little about myself and my journey',
    todo: [
        {taskName: "Masters in Graphic Information Technology", date: "2021-01-19", priority: "1", checked: true},
        {taskName: "Career path disreguarded by employer", date: "2021-01-19", priority: "2", checked: true},
        {taskName: "Teach myself coding principles in my free time", date: "2021-01-19", priority: "3", checked: false},
        {taskName: "I enjoy travel, video games, snowboarding, MTG, playing guitar", date: "2021-01-19", priority: "1", checked: true},
    ],
    active: true,
    },
];

//move to restore() for local storage
//loadPage();

const loadPage = () => {
renderProjects();
loadActive();
todoListeners();
projectListeners();
};

// LOCAL STORAGE TASK SAVING

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
    localStorage.setItem(`user`, JSON.stringify(allProjects));
}

//pulls books from local storage when page is refreshed
function restore() {
    if(!localStorage.user) {
        //renderProjects();
        console.log('not using storage');
        loadPage();
    }else {
        console.log('using local storage now');
        let objects = localStorage.getItem('user') // gets information from local storage to use in below loop to create DOM/display
        let newObjects = JSON.parse(objects);
        allProjects = newObjects;
        loadPage();
    }
}




// Clear all memory and return to demo
function clearMemory() {
    localStorage.clear();
    location.reload();
    return false;
}


export {allProjects, setData, clearMemory};