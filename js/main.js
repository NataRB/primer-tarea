alert("Inscripciones de materias 3 semestre psicologia 2024");
alert("Utilice los siguientes datos de prueba usuario=admin pass=123456");



let user="admin";
let pass ="123456";

let usuario=prompt("Ingrese su usuario");
let contraseña= prompt("Ingrese su contraseña");


let AtenciónPercepción;
function salir(){
   alert("La inscripcion ha finalizado");
}

function seleccionarOperacion(){
     console.log("1:Anotarme a otra materia");
     console.log("2: Ingresar otro legajo");
     console.log("3: Salir");

     let opcion=prompt("Seleccione una opcion: 1) Anotarme a Otra materia 2) Ingresar otra materia 3) Salir");

     switch(opcion){
      case "1":prompt("Ingrese codigo de materia a la que desea anotarse");
      break;
      case "2":prompt("Ingrese un nuevo legajo");
      
      break;
      case "3": salir();
      break;
     }
   }

function inscripcion(){
   while(AtenciónPercepción!=0){
      
      alert("La materia ha sido anotada con exito");
      seleccionarOperacion();
      
   } alert("La materia que ingreso no es valida");

}


function inicioInscripcion(){

 
  AtenciónPercepción=  prompt("Ingrese materia");
  let codigoMateria = prompt("Ingrese codigo de materia a la que desea anotarse");
  let diaDePreferencia = prompt("ingrese dia de preferencia siendo los mismos lu ma mi ju vi");
  inscripcion(AtenciónPercepción);

}


function inicioSesion(){
if(user==usuario && pass==contraseña){
   alert("Inicio de sesion exitosa");
   inicioInscripcion(user);

}else {
   alert("su usuario o contraseña no son validos");}
}

inicioSesion(pass);
