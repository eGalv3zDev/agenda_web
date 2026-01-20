import { Button } from "./components/common/button/button.js";
import { Contacts } from "./components/sections/contactos/Contacts.js";
import { viewContacts, viewNewContacts, viewToDoList, viewNewTask } from "./components/layout/navigation/NavControlers.js";

let app = document.getElementById("app");
let nav = document.getElementById("nav");
let container = document.getElementById("container");

nav.className = "nav-bar";
container.className = "main-container card";

nav.appendChild(Button("Lista de Contactos", "agenda", "account.svg", viewContacts));
nav.appendChild(Button("Agregar Contacto", "plus", "plus.svg", viewNewContacts));
nav.appendChild(Button("Lista de Tareas", "taskList", "toDoList.svg", viewToDoList));
nav.appendChild(Button("Agregar Tareas", "plus", "plus.svg", viewNewTask));

container.appendChild(Contacts());

async function tasks() {
  try {
    let datos = await fetch("https://jsonplaceholder.typicode.com/posts");
    let r = await datos.json();
    console.log(r);
  } catch (error) {
    console.error(error);
  }
}

tasks();
console.log("Completed");