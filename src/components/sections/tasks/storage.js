
import { viewToDoList } from "../../layout/navigation/NavControlers.js";

let LOCAL_STORAGE_KEY = "tasks";

let TareaList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
    { estado: false, nombre: "Comprar alimentos", fecha:"25/01/2026", prioridad: "Media" },
    { estado: false, nombre: "Preparar almuerzo", fecha:"02/02/26", prioridad: "Media"}
];

let guardarTareas = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(TareaList));
}

let eliminarTarea = (index) => {
    TareaList.splice(index,1);
    guardarTareas();
    viewToDoList();
}

export { TareaList, guardarTareas, eliminarTarea };