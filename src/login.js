let login = function () {
  // Crear el contenedor de login
  let loginSection = document.createElement("section");
  loginSection.className = "login-section";

  // Crear el título del login
  let h3 = document.createElement("h3");
  h3.innerHTML = "Login";

  // Crear el campo de usuario
  let user = document.createElement("input");
  user.type = "text";
  user.placeholder = "Usuario";

  // Crear el campo de contraseña
  let password = document.createElement("input");
  password.type = "password";
  password.placeholder = "Password";

  // Crear el botón de iniciar sesión
  let button = document.createElement("button");
  button.innerHTML = "Iniciar Sesión";

  // **Redirección al hacer clic**
  button.addEventListener("click", function () {
    const username = user.value.trim();
    const pwd = password.value.trim();

    if (username !== "" && pwd !== "") {
      // Redirige a app.html (asegúrate de que esté en la misma carpeta que index.html)
      window.location.href = "app.html";
    } else {
      alert("Por favor, ingresa usuario y contraseña");
    }
  });

  // Agregar los elementos al contenedor de login
  loginSection.appendChild(h3);
  loginSection.appendChild(user);
  loginSection.appendChild(password);
  loginSection.appendChild(button);

  return loginSection;
};

export { login };