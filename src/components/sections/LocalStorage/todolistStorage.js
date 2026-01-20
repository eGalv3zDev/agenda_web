// src/components/LocalStorage/todolistStorage.js
const TODO_STORAGE_KEY = "todolist";

function saveToDoListToStorage(tareas) {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tareas));
}

function getToDoListFromStorage() {
    return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [];
}

export { TODO_STORAGE_KEY, getToDoListFromStorage, saveToDoListToStorage };
