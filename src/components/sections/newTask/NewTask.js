import { guardarTareas, TareaList } from "../tasks/storage.js";

let NewTask = () => {

    let form = document.createElement("form");
    form.className = "new-task-form card";

    let h3 = document.createElement("h3");
    h3.className = "new-task-title";
    h3.textContent = "Nueva Tarea";

    let inputNombre = document.createElement("input");
    inputNombre.className = "new-task-input";
    inputNombre.type = "text";
    inputNombre.placeholder = "Descripción de Tarea";

    let inputFecha = document.createElement("input");
    inputFecha.className = "new-task-input";
    inputFecha.type = "date";

    let inputPrioridad = document.createElement("input");
    inputPrioridad.className = "new-task-input";
    inputPrioridad.type = "text";
    inputPrioridad.placeholder = "Prioridad";

    let actions = document.createElement("div");
    actions.className = "new-task-actions";

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Agregar";

    let btnCancel = document.createElement("button");
    btnCancel.type = "button";
    btnCancel.textContent = "Cancelar";

    actions.appendChild(btnSubmit);
    actions.appendChild(btnCancel);

    form.appendChild(h3);
    form.appendChild(inputNombre);
    form.appendChild(inputFecha);
    form.appendChild(inputPrioridad);
    form.appendChild(actions);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!inputNombre.value || !inputPrioridad.value) return;

        let newTask = {
            estado: false,
            nombre: inputNombre.value,
            fecha: inputFecha.value,
            prioridad: inputPrioridad.value
        };

        alert("Task added successfully");

        TareaList.push(newTask);
        guardarTareas();

        inputNombre.value = "";
        inputFecha.value = "";
        inputPrioridad.value = "";
    });

    return form;
};

export { NewTask };