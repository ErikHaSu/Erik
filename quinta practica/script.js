/*var personas = [{
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


*/
var guardar = [];
var profesiones = [];
function profesiones2(){
    profesiones.push(document.getElementById("idProfesion").value);
    document.getElementById("idProfesion").value=null;
}

function personas(){
var nombre = document.getElementById("idNombre").value;
var paterno = document.getElementById("idAP").value;
var materno = document.getElementById("idAM").value;
var profesion = document.getElementById("idProfesion").value;
var correo = document.getElementById("idcorreo").value;
var contraseña = document.getElementById("idpass").value;
var contraseña2 = document.getElementById("idpass2").value;
var telefono = document.getElementById("idTel").value;
profesiones.push(document.getElementById("idProfesion").value);
var persona ={
    nombre: nombre,
    paterno: paterno,
    materno: materno,
    profesion: profesiones,
    correo: correo,
    contraseña: contraseña,
    telefono: telefono
};  
guardar.push(persona);
document.getElementById("idNombre").value=null;
document.getElementById("idAP").value=null;
document.getElementById("idAM").value=null;
document.getElementById("idProfesion").value=null;
document.getElementById("idpass").value=null;
document.getElementById("idpass2").value=null;
document.getElementById("idTel").value=null;
document.getElementById("idcorreo").value=null;

document.getElementById('button1').disabled=true;
profesiones=[];

}
function imprimir()
{
   for(var i=0; i<guardar.length;i++) 
    console.log(guardar[i]);
}
function validatel(e)
{
    tecla = (document.all) ? e.keyCode : e.which;
    if(tecla==8)
        {
            return true;
        }
    patron = /[0-9]/;
    tecla_fin=String.fromCharCode(tecla)
    return patron.test(tecla_fin);
}
function validapass()
{
    var nombre = document.getElementById("idNombre").value;
    var paterno = document.getElementById("idAP").value;
    var materno = document.getElementById("idAM").value;
    var profesion = document.getElementById("idProfesion").value;
    var correo = document.getElementById("idcorreo").value;
    var telefono = document.getElementById("idTel").value;
    var pass = document.getElementById('idpass').value;
    var pass2 = document.getElementById('idpass2').value;
    
    if (pass == '' || pass2 == '' || nombre == '' || paterno == '' || materno=='' || profesion == ''||correo ==''|| telefono =='')
    {
         alert("falta algun dato")
         return false;
        
        
        }else{
        if(pass != pass2){
            
            document.getElementById('button1').disabled=true;
            alert("Las contraseñas deben coincidir");
            return false;
            
        }else{ 
            
            document.getElementById('button1').disabled=false;
            alert("ahora si");
            return true;
        }    
        }
       
        
   
}
