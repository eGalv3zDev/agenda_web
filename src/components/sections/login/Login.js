let login = function(){

    let login = document.createElement("section");
    login.className = "login-container card";

    let h3 = document.createElement("h3");
    h3.className = "login-title";
    h3.innerHTML = "¡Bienvenido!";

    let user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";
    user.className = "login-input";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Contraseña";
    password.className = "login-input";
    
    let button = document.createElement("button");
    button.innerHTML = 'Iniciar Sesión';
    button.className = "login-btn";

    button.addEventListener('click', function(){
        window.location.href = "./src/app.html";
    });

    login.appendChild(h3);
    login.appendChild(user);
    login.appendChild(password);
    login.appendChild(button);

    return login;
}

export { login };