import { ContactList } from "../Contacto/db";
function NewContactForm(mifuncion) {
    let form = document.createElement("form");
    form.className = "new-contact-form";

    // titulo
    let title = document.createElement("h2");
    title.textContent = "Nuevo Contacto";
    form.appendChild(title);

    // Campo Nombre
    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre:";
    labelNombre.htmlFor = "nombre";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";
    inputNombre.name = "nombre";
    inputNombre.required = true;
    inputNombre.placeholder = "Ej: Juan";

    // Campo Telefono
    let labelTelefono = document.createElement("label");
    labelTelefono.textContent = "Telefono:";
    labelTelefono.htmlFor = "telefono";

    let inputTelefono = document.createElement("input");
    inputTelefono.type = "text";
    inputTelefono.id = "telefono";
    inputTelefono.name = "telefono";
    inputTelefono.required = true;
    inputTelefono.placeholder = "EJ: 12345678";

    // Botones
    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Guardar";

    let btnCancel = documento.createElement("button");
    btnCancel.type = "cancel";
    btnCancel.textContent = "Cancelar";
    
    // Agregar elementos al form
    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(labelTelefono);
    form.appendChild(inputTelefono);
    form.appendChild(btnSubmit);
    form.appendChild(btnCancel);

    // Programacion del formulario

    form.addEventListener("submit", (e) => {
        e.preventDegault();

        let contacto = {
        nombre: inputNombre.value,
        telefono: inputTelefono.value
    };

    console.log(contacto);
    ContactList.push(contacto);
        
});    
}