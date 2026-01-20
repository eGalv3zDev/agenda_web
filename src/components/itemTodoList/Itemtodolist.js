import { saveToDoListToStorage } from "../sections/LocalStorage/todolistStorage.js";

function ItemToDoList(tarea, tareasArray, container) {
    const div = document.createElement("div");
    div.className = "item-todo";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;
    checkbox.addEventListener("change", () => {
        tarea.completada = checkbox.checked;
        saveToDoListToStorage(tareasArray);
        renderTareas(container, tareasArray);
    });

    const p = document.createElement("p");
    p.textContent = tarea.texto;
    if (tarea.completada) {
        p.style.textDecoration = "line-through";
        p.style.color = "#888";
    }

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
        const index = tareasArray.indexOf(tarea);
        if (index > -1) {
            tareasArray.splice(index, 1);
            saveToDoListToStorage(tareasArray);
            renderTareas(container, tareasArray);
        }
    });

    div.append(checkbox, p, btnBorrar);
    return div;
}

// Función para re-renderizar todas las tareas
function renderTareas(container, tareasArray) {
    container.innerHTML = "";
    tareasArray.forEach(tarea => {
        const item = ItemToDoList(tarea, tareasArray, container);
        container.appendChild(item);
    });
}

export { ItemToDoList, renderTareas };