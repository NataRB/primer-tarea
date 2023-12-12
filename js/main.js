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
