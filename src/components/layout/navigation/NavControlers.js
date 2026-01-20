import { Contacts } from "../../sections/contactos/Contacts.js";
import { nuevoContacto } from "../../sections/nuevosContacts/NewContact.js";
import { tasks } from "../../sections/tasks/taskList.js";
import { NewTask } from "../../sections/newTask/NewTask.js";

let container = document.getElementById("container");
let viewContacts = function() {
    container.innerHTML = "";
    container.appendChild(Contacts());
}

let viewNewContacts = function() {
    container.innerHTML = "";
    container.appendChild(nuevoContacto());
}

let viewToDoList = function() {
    container.innerHTML = "";
    container.appendChild(tasks());
}

let viewNewTask = function() {
    container.innerHTML = "";
    container.appendChild(NewTask());
}

export {viewContacts, viewNewContacts, viewToDoList, viewNewTask};