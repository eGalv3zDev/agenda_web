let itemContacto = (imgContacto, nombre, telefono) => {
    let div = document.createElement("div");
    div.className = "contact-item";

    let img = document.createElement("img");
    img.className = "contact-avatar";
    img.src = "./src/assets/icons/contact.svg";

    let info = document.createElement("div");
    info.className = "contact-info";

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.className = "contact-name";
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.className = "contact-phone";
    etiquetaTelefono.textContent = telefono;

    info.appendChild(etiquetaNombre);
    info.appendChild(etiquetaTelefono);

    div.appendChild(img);
    div.appendChild(info);

    return div;
};

export { itemContacto };
