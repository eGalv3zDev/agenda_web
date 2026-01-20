import { TareaList, eliminarTarea, guardarTareas } from "../../sections/tasks/storage.js";

let TaskItem = (tarea, index) => {
    let TaskItem = document.createElement("div");
    TaskItem.className = "task-item";

    let etiquetaEstado = document.createElement("input");
    etiquetaEstado.type = "checkbox";
    etiquetaEstado.checked = tarea.estado;
    etiquetaEstado.className = "task-check";

    etiquetaEstado.addEventListener("change", () => {
        TareaList[index].estado = etiquetaEstado.checked;
        guardarTareas();
        TaskItem.classList.toggle("completada", etiquetaEstado.checked);
    });

    let info = document.createElement("div");
    info.className = "task-info";

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.className = "task-name";
    etiquetaNombre.textContent = tarea.nombre;

    let etiquetaFecha = document.createElement("p");
    etiquetaFecha.className = "task-date";
    etiquetaFecha.textContent = tarea.fecha || "Sin fecha";

    let etiquetaPrioridad = document.createElement("span");
    etiquetaPrioridad.className = "task-priority";
    etiquetaPrioridad.textContent = tarea.prioridad;

    let etiquetaEliminar = document.createElement("button");
    etiquetaEliminar.className = "task-delete";

    let imagenBoton = document.createElement("img");
    imagenBoton.src = `./assets/icons/delete.svg`;

    etiquetaEliminar.appendChild(imagenBoton);

    etiquetaEliminar.addEventListener("click", () => {
        eliminarTarea(index);
    });

    info.appendChild(etiquetaNombre);
    info.appendChild(etiquetaFecha);

    TaskItem.appendChild(etiquetaEstado);
    TaskItem.appendChild(info);
    TaskItem.appendChild(etiquetaPrioridad);
    TaskItem.appendChild(etiquetaEliminar);

    if (tarea.estado) TaskItem.classList.add("completada");

    return TaskItem;
};

export { TaskItem };