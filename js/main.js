//alert("Inscripciones de materias 3 semestre psicologia 2024");
//alert("Utilice los siguientes datos de prueba usuario=admin pass=123456");


//let user="admin";
//let pass ="123456";

//let usuario=prompt("Ingrese su usuario");
//let contraseña= prompt("Ingrese su contraseña");


//let AtenciónPercepción;
//function salir(){
//   alert("La inscripcion ha finalizado");
//}

//function seleccionarOperacion(){
//     console.log("1: Anotarme a otra materia");
//     console.log("2: Ingresar otro materia");
//     console.log("3: Salir");

//     let opcion=prompt("Seleccione una opcion: 1) Anotarme a Otra materia 2) Ingresar otra materia 3) Salir");

//     switch(opcion){
//      case "1":prompt("Ingrese codigo de materia a la que desea anotarse");
//      break;
//      case "2":prompt("Ingrese un nuevo legajo");
//      break;
//      case "3": salir();
//      break;
//     }
//   }

//function inscripcion(){
//   while(AtenciónPercepción!=0){
      
//      alert("La materia ha sido anotada con exito");
//      seleccionarOperacion();
      
//   } alert("La materia que ingreso no es valida");
//}

//function inicioInscripcion(){

//  AtenciónPercepción=  prompt("Ingrese materia");
//  let codigoMateria = prompt("Ingrese codigo de materia a la que desea anotarse");
//  let diaDePreferencia = prompt("ingrese dia de preferencia siendo los mismos lu ma mi ju vi");
//  inscripcion(AtenciónPercepción);

//}

//function inicioSesion(){
//if(user==usuario && pass==contraseña){
//   alert("Inicio de sesion exitosa");
//   inicioInscripcion(user);

//}else {
//   alert("su usuario o contraseña no son validos");}
//}

//inicioSesion(pass);


alert("Inscripciones de materias 3 semestre psicologia 2024");
alert("Utilice los siguientes datos de prueba usuario=admin pass=123456");

// Función para anotarse a otra materia
function anotarseAMateria() {
   let codigoMateria = prompt("Ingrese código de la materia a la que desea anotarse");
   alert(`Se ha anotado exitosamente a la materia ${codigoMateria}`);
}

// Función para ingresar otra materia
function ingresarOtraMateria() {
   let nuevoLegajo = prompt("Ingrese un nuevo legajo");
   alert(`Se ha ingresado exitosamente la materia con legajo ${nuevoLegajo}`);
}

// Función para realizar la inscripción
function inscripcion() {
   let opcion;

   do {
       console.log("1: Anotarme a otra materia");
       console.log("2: Ingresar otra materia");
       console.log("3: Salir");

       opcion = prompt("Seleccione una opción: 1) Anotarme a otra materia 2) Ingresar otra materia 3) Salir");

       switch (opcion) {
           case "1":
               anotarseAMateria();
               break;
           case "2":
               ingresarOtraMateria();
               break;
           case "3":
               alert("La inscripción ha finalizado");
               break;
           default:
               alert("Opción no válida");
       }
   } while (opcion !== "3");
}

// Función para el inicio de la inscripción
function inicioInscripcion() {
   let materia = prompt("Ingrese materia");
   let codigoMateria = prompt("Ingrese código de materia a la que desea anotarse");
   let diaDePreferencia = prompt("Ingrese día de preferencia (lu, ma, mi, ju, vi)");

   alert(`Materia: ${materia}, Código: ${codigoMateria}, Día de preferencia: ${diaDePreferencia}`);

   inscripcion();
}

// Función para el inicio de sesión
function inicioSesion() {
   let usuario = prompt("Ingrese su usuario");
   let contraseña = prompt("Ingrese su contraseña");

   if (usuario === "admin" && contraseña === "123456") {
       alert("Inicio de sesión exitoso");
       inicioInscripcion();
   } else {
       alert("Su usuario o contraseña no son válidos");
   }
}

// Inicio del programa
inicioSesion();
