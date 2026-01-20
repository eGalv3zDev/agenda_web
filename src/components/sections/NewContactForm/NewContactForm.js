import { getContactsFromStorage, saveContactsToStorage } from "../LocalStorage/storage.js";

function NewContactForm() {
    let form = document.createElement("form");
    form.className = "new-contact-form";

    let title = document.createElement("h2");
    title.textContent = "Nuevo Contacto";
    form.appendChild(title);

    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre:";
    labelNombre.htmlFor = "nombre";
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.placeholder = "Ej: Juan";

    let labelTelefono = document.createElement("label");
    labelTelefono.textContent = "Teléfono:";
    labelTelefono.htmlFor = "telefono";
    let inputTelefono = document.createElement("input");
    inputTelefono.type = "text";
    inputTelefono.id = "telefono";
    inputTelefono.placeholder = "Ej: 12345678";

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Guardar";

    let btnCancel = document.createElement("button");
    btnCancel.type = "button";
    btnCancel.textContent = "Cancelar";
    btnCancel.addEventListener("click", () => form.reset());

    form.append(labelNombre, inputNombre, labelTelefono, inputTelefono, btnSubmit, btnCancel);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = inputNombre.value.trim();
        const telefono = inputTelefono.value.trim();
        if (!nombre || !telefono) return;

        const contactos = getContactsFromStorage();
        if (contactos.some(c => c.telefono === telefono)) {
            alert("Este teléfono ya existe");
            return;
        }

        contactos.push({ nombre, telefono });
        saveContactsToStorage(contactos);
        form.reset();
    });

    return form;
}

export { NewContactForm };