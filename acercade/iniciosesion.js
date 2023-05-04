var loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "usuario" && password === "contraseña") {
    alert("Inicio de sesión exitoso");
    // Aquí puedes redirigir a otra página o hacer algo más después de un inicio de sesión exitoso
  } else {
    alert("Nombre de usuario o contraseña incorrectos");
  }
});




  

  