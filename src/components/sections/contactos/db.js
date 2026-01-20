let STORAGE_KEY = "contactos";

let ContactList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
    { nombre: "Juan Perez", telefono: "5551234567" },
    { nombre: "Maria Lopez", telefono: "5559876543" },
    { nombre: "Carlos Sanchez", telefono: "5557654321"},
    { nombre: "Ana Gomez", telefono: "5552468101"},
    { nombre: "Luis Fernandez", telefono: "5551357924"}
];  

let guardarContacts = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ContactList));
}

export { ContactList, guardarContacts };