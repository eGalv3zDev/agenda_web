import { itemContacto } from "../../common/itemContacto/ContactItem.js";
import { ContactList } from "./db.js";

let Contacts = () => {
    let sectionContacts = document.createElement("section");
    sectionContacts.className = "contacts-section card";

    let h2 = document.createElement("h2");
    h2.className = "contacts-title";
    h2.textContent = "Contactos";

    sectionContacts.appendChild(h2);

    let list = document.createElement("div");
    list.className = "contacts-list";

    ContactList.forEach((contact) => {
        list.appendChild(
            itemContacto("account.svg", contact.nombre, contact.telefono)
        );
    });

    sectionContacts.appendChild(list);

    return sectionContacts;
};

export { Contacts };
