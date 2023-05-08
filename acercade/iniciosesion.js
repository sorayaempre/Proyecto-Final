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

// Crea un objeto con los datos del registro
var registro = {
  nombre: "Juan",
  correo: "juan@example.com"
  
};

// Convierte el objeto a una cadena JSON y lo almacena en localStorage
localStorage.setItem("registro", JSON.stringify(registro));

// Recupera la cadena JSON del registro de localStorage
var registroGuardado = localStorage.getItem("registro");

// Si hay un registro almacenado, conviértelo a objeto y llena los campos del formulario
if (registroGuardado) {
  var registro = JSON.parse(registroGuardado);
  document.getElementById("nombre").value = registro.nombre;
  document.getElementById("correo").value = registro.correo;
  document.getElementById("contraseña").value = registro.contraseña;
  document.getElementById("repiteContraseña").value = registro.repiteContraseña;
}




  

  