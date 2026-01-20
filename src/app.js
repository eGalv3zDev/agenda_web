import { Button } from "./components/common/button/button.js";
import { NewContactForm } from "./components/sections/NewContactForm/NewContactForm.js";
import { Contactos } from "./components/sections/Contacto/Contactos.js";
import { NewToDoList } from "./components/sections/newtodoform/Newtodoform.js";
import { getToDoListFromStorage } from "./components/sections/LocalStorage/todolistStorage.js";
import { ItemToDoList } from "./components/itemTodoList/Itemtodolist.js";

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");
    const container = document.getElementById("container");

    // -----------------------------
    // Contactos
    // -----------------------------
    function viewContacts() {
        // Contactos.js ya maneja el container
        Contactos(container);
    }

    function createContact() {
        container.innerHTML = "";
        container.appendChild(NewContactForm(viewContacts)); // opcional callback para recargar
    }

    // -----------------------------
    // ToDoList
    // -----------------------------
    function viewToDoList() {
        container.innerHTML = "";

        const tareas = getToDoListFromStorage();

        if (tareas.length === 0) {
            const p = document.createElement("p");
            p.textContent = "No hay tareas.";
            container.appendChild(p);
        } else {
            tareas.forEach((tarea, index) => {
                container.appendChild(ItemToDoList(tarea.texto, tarea.completada, index));
            });
        }
    }

    function createTask() {
        container.innerHTML = "";

        // Contenedor formulario
        const formContainer = document.createElement("div");
        formContainer.className = "form-todo-container";
        formContainer.appendChild(NewToDoList(renderList));

        // Contenedor lista
        const listContainer = document.createElement("div");
        listContainer.className = "todo-list-container";

        container.append(formContainer, listContainer);

        // Función para renderizar la lista
        function renderList() {
            listContainer.innerHTML = "";
            const tareas = getToDoListFromStorage();
            if (tareas.length === 0) {
                const p = document.createElement("p");
                p.textContent = "No hay tareas aún.";
                listContainer.appendChild(p);
            } else {
                tareas.forEach((tarea, index) => {
                    listContainer.appendChild(ItemToDoList(tarea.texto, tarea.completada, index));
                });
            }
        }

        renderList();
    }

    // -----------------------------
    // Botones de navegación
    // -----------------------------
    nav.appendChild(Button("Agenda", "agenda", "person.svg", viewContacts));
    nav.appendChild(Button("Crear contacto", "plus", "nuevo.svg", createContact));
    nav.appendChild(Button("ToDoList", "todoList", "agenda.svg", viewToDoList));
    nav.appendChild(Button("Crear tarea", "plus", "plus.svg", createTask));

    // Mostrar contactos al inicio
    viewContacts();
});