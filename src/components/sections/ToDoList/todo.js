import { getContactsFromStorage, saveContactsToStorage } from "../LocalStorage/storage";

// Obtener tareas de un contacto por telefono
function getTasksByPhone(telefono) {
    const contacts = getContactsFromStorage();
    const contact = contacts.find(c => c.telefono === telefono);
    return contact?.tareas || [];
}

// Agregar tarea a un contacto
function addTaskToContact(telefono, texto) {
    const contacts = getContactsFromStorage();
    const contact = contacts.find(c => c.telefono === telefono);
    if (!contact) return;

    if (!contact.tareas) contact.tareas = [];  
    
    contact.tareas.psuh({
        id: Date.now(),
        texto,
        completada:false
    });

    saveContactsToStorage(contacts);
}

// Eliminar tarea
function deleteTaskFromContact(telefono, taskId) {
    const contacts = getContactsFromStorage();
    const contact = contacts.find(c => c.telefono === telefono);
    if(!contact?.tareas) return;

    contact.tareas = contact.tareas.filter(t => t.id !== taskId);
    saveContactsToStorage(contacts);
}

// Marcar tarea como completada / incompleta
function toggleTask(telefono, taskId) {
    const contacts = getContactsFromStorage();
    const contact = contacts.find(c => c.telefono === telefono);
    if (!contact?.tareas) return;

    const task = contact.tareas.find(t => t.id === taskId);
    if (task) task.completada= !task.completada;

    saveContactsToStorage(contacts);
}

export { getTasksByPhone, addTaskToContact, deleteTaskFromContact, toggleTask };