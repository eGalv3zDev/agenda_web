// src/components/LocalStorage/storage.js
const LOCAL_STORAGE_KEY = "agenda_telefonica";

function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export { LOCAL_STORAGE_KEY, getContactsFromStorage, saveContactsToStorage };
