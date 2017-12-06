var personas = [{
    nombre: "Jesus",
    apellidos: {
      paterno: "Favela",
      materno: "Rodriguez"
    },
    profesiones: {
      titulacion: "Estudiante",
      roles: ["Alumno", "Hijo", "Supp"]
    }

  },
  {
    nombre: "La Yska",
    apellidos: {
      paterno: "Santos",
      materno: "Nava"
    },
    profesiones: {
      titulacion: "Estudiante",
      roles: ["Alumna", "Hija", "Jg"]
    }
  },
  {
    nombre: "El Flip",
    apellidos: {
      paterno: "Orleans",
      materno: "From Towers"
    },
    profesiones: {
      titulacion: "Nazi",
      roles: ["Comandante", "General", "Main Rammito"]
    }



  },
  {
    nombre: "Hugo",
    apellidos: {
      paterno: "Mancinas",
      materno: "Brisenio"
    },
    profesiones: {
      titulacion: "Ingeniero",
      roles: ["Profesor", "Desarrollador", "Some Else"]
    }



  }];
function datos (){
    
}
var tam = prompt("ingrese la cantidad de datos");
for (var k = 0; k < tam; k++)
    {
    var nombretemp = prompt("ingrese su nombre");
    var paternotemp = prompt("ingrese su apellido paterno");
    var maternotemp = prompt("ingrese su apellido materno");
    var titulaciontemp = prompt("ingrese su titulacion");
    var cantidad = prompt("¿cuantos oficios tiene?");
    var texttemp = " ";
    for (m=0;m<cantidad;m++){
        texttemp += prompt("Ingrese su rol")+" ";
    }
            var rolestemp = texttemp;
    
            var objetotemp = {
                nombre: nombretemp,
                apellidos: {paterno: paternotemp, materno: maternotemp},
                profesiones: {titulacion: titulaciontemp, roles: rolestemp}
            };
    personas.push(objetotemp);
    }

    for (var i = 0; i < personas.length; i++)
        {
          var texto = " ";
          texto += personas[i].nombre + " " +
            personas[i].apellidos.paterno + " " +
            personas[i].apellidos.materno + " ";
            texto += " es " + personas[i].profesiones.titulacion;
            texto += " y se dedica a ";
            texto += personas[i].profesiones.roles; 
          console.log(texto);
            }


