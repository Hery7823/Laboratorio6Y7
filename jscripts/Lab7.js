'use strict'
var listaPersonas = [];
var usuario_1;
function agregar_a_la_lista(usuario_1)
{
    listaPersonas.push(usuario_1) 
    document.getElementById('tabla').innerHTML += '<tbody><td>'+usuario_1.nombre+'</td><td>'+usuario_1.apellido+'</td><td>'+usuario_1.edad+'</td><td>'+usuario_1.fechaNac+'</td><td>'+usuario_1.direccion+'</td><td>'+usuario_1.ciudad+'</td><td>'+usuario_1.telefono+'</td><td>'+usuario_1.email
}







function Capturar() 
{
  class Persona 
  {
    constructor(nombre,apellido,edad,fechaNac,direccion,ciudad,telefono,email)
    {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.fechaNac = fechaNac;
      this.direccion = direccion;
      this.ciudad = ciudad;
      this.telefono = telefono;
      this.email = email;
    }
  }
  const nombreUsuario = document.getElementById("nombre").value;
  const apellidoUsuario = document.getElementById("apellido").value;
  const edadUsuario = document.getElementById("edad").value;
  const fechaUsuario = document.getElementById("fechaNacimiento").value;
  const direccionUsuario = document.getElementById("direccion").value;
  const ciudadUsuario = document.getElementById("ciudad").value;
  const telefonoUsuario = document.getElementById("telefono").value;
  const correoUsuario = document.getElementById("correo").value;

  usuario_1 = new Persona(nombreUsuario,apellidoUsuario,edadUsuario,fechaUsuario,direccionUsuario,ciudadUsuario,telefonoUsuario,correoUsuario) 
  agregar_a_la_lista(usuario_1)
  
}



