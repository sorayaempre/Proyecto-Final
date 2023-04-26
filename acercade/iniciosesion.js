function iniciarSesion() {
    var nombreUsuario = document.getElementById("username").value;
    var contrasena = document.getElementById("password").value;
    var usuarios = [
      { nombreUsuario: "usuario1", contrasena: "1234" },
      { nombreUsuario: "usuario2", contrasena: "5678" },
      { nombreUsuario: "usuario3", contrasena: "abcd" }
    ];
    for (var i = 0; i < usuarios.length; i++) {
      if (nombreUsuario === usuarios[i].nombreUsuario && contrasena === usuarios[i].contrasena) {
        alert("Inicio de sesión exitoso");
        return;
      }
    }
    alert("Nombre de usuario o contraseña incorrectos");
  }
  

  