export function login() {
    const loginSection = document.createElement("section");
    loginSection.className = "login-section";

    const h3 = document.createElement("h3");
    h3.textContent = "Login";

    const user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    const password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Contraseña";

    const button = document.createElement("button");
    button.textContent = "Iniciar Sesión";

    button.addEventListener("click", () => {
        if (user.value.trim() && password.value.trim()) {
            window.location.href = "app.html";
        } else {
            alert("Por favor, ingresa usuario y contraseña");
        }
    });

    loginSection.appendChild(h3);
    loginSection.appendChild(user);
    loginSection.appendChild(password);
    loginSection.appendChild(button);

    return loginSection;
}