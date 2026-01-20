import { getToDoListFromStorage } from "../LocalStorage/todolistStorage.js";
import { renderTareas } from "../../itemTodoList/Itemtodolist.js";
import { saveToDoListToStorage } from "../LocalStorage/todolistStorage.js";

function NewToDoList(container) {
    const form = document.createElement("form");
    form.className = "new-todo-form";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Nueva tarea";

    const btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Agregar";

    const btnCancel = document.createElement("button");
    btnCancel.type = "button";
    btnCancel.textContent = "Cancelar";
    btnCancel.addEventListener("click", () => form.reset());

    form.append(input, btnSubmit, btnCancel);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const texto = input.value.trim();
        if (!texto) return;

        const tareas = getToDoListFromStorage();
        tareas.push({ id: Date.now(), texto, completada: false });

        saveToDoListToStorage(tareas);
        input.value = "";
        renderTareas(container, tareas);
    });

    return form;
}

export { NewToDoList };