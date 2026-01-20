import { login } from "./login.js";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    if (!root) {
        console.error("No se encontró el contenedor #root");
        return;
    }

    root.appendChild(login());
});