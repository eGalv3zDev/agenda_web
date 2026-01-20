// src/components/sections/common/itemContacto.js
let ItemContacto = (imgContacto, nombre, telefono) => {
    let div = document.createElement("div");
    div.className = "item-contacto";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./src/assets/icons/${imgContacto}`;
    etiquetaImg.alt = `${nombre} icon`;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.className = "contacto-nombre";
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.className = "contacto-telefono";
    etiquetaTelefono.textContent = telefono;

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);

    return div;
};

export { ItemContacto };