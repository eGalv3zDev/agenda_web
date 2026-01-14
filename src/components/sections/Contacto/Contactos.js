import { ItemContacto } from "../../../../src/components/sections/common/ItemContacto.js";
import { ContactList } from "./db/js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "contactos";
    sectionContactos.appendChild(h2);

    ContactList.array.forEach((contact) => {
        sectionContactos.appendChild(ItemContacto("user2.svg",
        contact.nombre, contact.telefono));
    });

    return sectionContactos;
};

export { Contactos };