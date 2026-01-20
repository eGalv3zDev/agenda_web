import { ContactList, guardarContacts } from "../contactos/db.js";

let nuevoContacto = () => {
    let form = document.createElement("form");
    form.className = "new-contact-form card";

    let h3 = document.createElement("h3");
    h3.className = "new-contact-title";
    h3.textContent = "Nuevo Contacto";

    let userName = document.createElement("input");
    userName.className = "new-contact-input";
    userName.type = "text";
    userName.placeholder = "Nombre";

    let telefono = document.createElement("input");
    telefono.className = "new-contact-input";
    telefono.type = "tel";
    telefono.placeholder = "Telefono";

    let actions = document.createElement("div");
    actions.className = "new-contact-actions";

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Guardar";

    let btnCancel = document.createElement("button");
    btnCancel.type = "button";
    btnCancel.textContent = "Cancelar";

    actions.appendChild(btnSubmit);
    actions.appendChild(btnCancel);

    form.appendChild(h3);
    form.appendChild(userName);
    form.appendChild(telefono);
    form.appendChild(actions);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!userName.value || !telefono.value) return;

        let contacto = {
            nombre: userName.value,
            telefono: telefono.value
        };

        alert("Contact added successfully");

        ContactList.push(contacto);
        guardarContacts();

        userName.value = "";
        telefono.value = "";
    });

    return form;
};

export { nuevoContacto };
