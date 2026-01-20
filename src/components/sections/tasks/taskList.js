import { TareaList } from "./storage.js";
import { TaskItem } from "../../common/TaskItem/TaskItem.js";

let tasks = () => {

    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tasks-section card";

    let h2 = document.createElement("h2");
    h2.className = "tasks-title";
    h2.textContent = "Lista de Tareas";

    sectionTareas.appendChild(h2);

    let sectionLabel = document.createElement("div");
    sectionLabel.className = "tasks-header";

    let labelCheckList = document.createElement("h3");
    labelCheckList.textContent = "Hecho";

    let labelDescripcion = document.createElement("h3");
    labelDescripcion.textContent = "Descripción";

    let labelFecha = document.createElement("h3");
    labelFecha.textContent = "Fecha";

    let labelPrioridad = document.createElement("h3");
    labelPrioridad.textContent = "Prioridad";

    sectionLabel.appendChild(labelCheckList);
    sectionLabel.appendChild(labelDescripcion);
    sectionLabel.appendChild(labelFecha);
    sectionLabel.appendChild(labelPrioridad);

    sectionTareas.appendChild(sectionLabel);

    let taskList = document.createElement("div");
    taskList.className = "tasks-list";

    TareaList.forEach((tarea, index) => {
        taskList.appendChild(TaskItem(tarea, index));
    });

    sectionTareas.appendChild(taskList);

    return sectionTareas;
};

export { tasks };