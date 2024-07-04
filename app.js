// variables y tipo de datos primitivos

// let o const

/* let  nombre = valor
const dni = valor */

alert("Hola! " + "Bienvenido a CineStar");

alert("Por favor, inicie sesion para comprar las entradas");

let usuario = prompt("Ingrese su nombre de usuario");

let clave = prompt("Ingrese su clave nueva");

let estaLogeado = true;

if (estaLogeado == true) {
  console.log("Acceso autorizado");
} else {
  console.log("Acceso denegado");
}

console.log(usuario);

alert("Gracias por iniciar sesion!");

alert("Elija la pelicula");

let p1 = "Intensamente 2";

let p2 = "Terminator 1";

let peliculas = prompt("Intensamente 2 ó Terminator 1");

console.log(p1);
console.log(p2);

console.log(peliculas);

let dia = prompt("Elija el día de la función (1, 2, 3, 4, 5, 6, 7)");

if (dia == "1") {
  console.log("Lunes");
} else if (dia == "2") {
  console.log("Martes");
} else if (dia == "3") {
  console.log("Miercoles");
} else if (dia == "4") {
  console.log("Jueves");
} else if (dia == "5") {
  console.log("Viernes");
} else if (dia == "6") {
  console.log("Sabado");
} else if (dia == "7") {
  console.log("Domingo");
} else {
  console.log("el numero no es valido");
}

let cantidadDeEntradas = Number(
  prompt("Seleccione la cantidad de entradas (200 pesos c/u)")
);
let precioDeEntrada = Number(200);
console.log(cantidadDeEntradas);

let totalAPagar = cantidadDeEntradas * precioDeEntrada;

alert("Su total es de " + totalAPagar);

console.log("Su total es de " + totalAPagar);

console.log("Gracias por su compra!");

// let numero = prompt("por favor ingresar numero");

// console.log(numero);

//let nombreDeUsuario = prompt("por favor inicia sesion con tu nombre de usuario")

//alert("hola " + nombreDeUsuario + " como estas?");

/* let n1 = Number(prompt("ingresa el primer numero"));
let n2 = Number(prompt("ingresa el segundo numero"));

let total = n1 + n2;

console.log(total);

// boolean --> booleano 0/1 si o no true o false

console.log(n1 > n2); */

/* if(la condicion) {
lo que quiero hacer
} */
