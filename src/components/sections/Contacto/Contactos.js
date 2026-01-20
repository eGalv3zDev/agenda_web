import { getContactsFromStorage, saveContactsToStorage } from "../LocalStorage/storage.js";
import { ItemContacto } from "../../common/itemContacto/ItemContacto.js";

function Contactos(container) {
    container.innerHTML = ""; // Limpiar contenedor

    const contactos = getContactsFromStorage();

    contactos.forEach((c, index) => {
        const item = ItemContacto(c.img || "person.svg", c.nombre, c.telefono);

        // Botón borrar
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.className = "btn-borrar-contacto";
        btnBorrar.addEventListener("click", () => {
            if (confirm(`¿Deseas borrar el contacto ${c.nombre}?`)) {
                contactos.splice(index, 1); // eliminar del array
                saveContactsToStorage(contactos); // guardar cambios
                Contactos(container); // recargar la vista
            }
        });

        item.appendChild(btnBorrar);
        container.appendChild(item);
    });

    return container;
}

export { Contactos };