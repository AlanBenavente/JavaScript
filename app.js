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

alert("Gracias por iniciar sesion " + usuario + "!");

alert("Elija la pelicula");

let peliculas = prompt("(1)Intensamente 2 ó (2)Terminator 1");

let p1 = "Intensamente 2";

let p2 = "Terminator 1";

if (peliculas == "1") {
  console.log(p1);
} else if (peliculas == "2") {
  console.log(p2);
} else {
  console.log("La opción seleccionada no es válida!");
}

let dia = prompt("Elija el día de semana de la función (1, 2, 3, 4, 5, 6, 7)");

/* if (dia == "1") {
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
} */

switch (dia) {
  case "1":
    console.log("Lunes");
    break;
  case "2":
    console.log("Martes");
    break;
  case "3":
    console.log("Miercoles");
    break;
  case "4":
    console.log("Jueves");
    break;
  case "5":
    console.log("Viernes");
    break;
  case "6":
    console.log("Sabado");
    break;
  case "7":
    console.log("Domingo");
    break;
  default:
    console.log("El número no es válido");
}

let cantidadDeEntradas = Number(
  prompt("Seleccione la cantidad de entradas (200 pesos c/u)")
);
let precioDeEntrada = Number(200);
console.log(cantidadDeEntradas);
console.log(precioDeEntrada);

let totalAPagar = cantidadDeEntradas * precioDeEntrada;

alert("Su total es de " + totalAPagar);

console.log("Su total es de " + totalAPagar);

let intensamente2 = {
  precio: 200,
  descripcion: "Infantil",
  combo: "Pochoclos dulces con gomitas",
};

console.log(intensamente2);

intensamente2.combo = "Nachos con queso";
intensamente2.stock = 100;

console.log(intensamente2);

let candy = ["Gomitas", "Chocolates", "Caramelos", "Cereales", "Helado"];

console.log(candy[candy.length - 1]);

let candyBar = [
  {
    id: 1,
    producto: "Gomitas",
    precio: 100,
  },
  {
    id: 2,
    producto: "Chocolates",
    precio: 200,
  },
  {
    id: 3,
    producto: "Ceriales",
    precio: 150,
  },
  {
    id: 4,
    producto: "Helados",
    precio: 300,
  },
];

let encontrar = (identificador) => {
  for (let i = 0; i < candyBar.length; i++) {
    if (candyBar[i].id == identificador) {
      return candyBar[i];
    }
  }

  return false;
};

let productoEncontrado = encontrar(2);

console.log(productoEncontrado);

alert("Gracias por su compra!");

console.log("Gracias por su compra!");

function adios() {
  let adios = "¡Que tengas un buen día!";

  console.log("¡Que tengas un lindo día!");
}

adios();
adios();

console.log(document.body);

let categorias = document.getElementById("categorias");
console.log(categorias);

let contenedorDeEstrenos = document.querySelector(".estrenos");
contenedorDeEstrenos.innerHTML = `<h3>Animación</h3> 
<h3>Suspenso</h3> 
<h3>Drama</h3>
<h3>Anime</h3>
`;

console.log(contenedorDeEstrenos);

let botonChocolates = document.getElementById("botonChocolates");
botonChocolates.onclick = () => {
  alert("Ricos chocolates!"); // solo uno con alerta
  botonChocolates.className = "botonChocolates";
};

let numero = 0;

let botonGomitas = document.getElementById("botonGomitas");
botonGomitas.addEventListener("click", () => {
  numero++;
  let gomitas = " Gomitas";
  botonGomitas.innerText = numero + gomitas;
  botonGomitas.className = "botonGomitas";
});

let numero1 = 0;

let botonHelados = document.getElementById("botonHelados");
botonHelados.addEventListener("click", () => {
  numero1++;
  let helados = " Helados";
  botonHelados.innerText = numero1 + helados;
  botonHelados.className = "botonHelados";
});

// los botones de gomitas y helados, aumentan con cada clic.

let inputFormulario = document.getElementById("input-pelicula");

inputFormulario.addEventListener("keypress", (e) => {});
console.log(teclas);

let formulario = document.querySelector("form");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
});

let inputGenero = document.getElementById("genero");
let inputEstreno = document.getElementById("estreno");

let inputPelicula = "";

inputGenero.addEventListener("input", () => {
  inputPelicula = inputGenero.value;
});

console.log(inputGenero);
console.log(inputEstreno);

const series = [
  {
    id: 1,
    titulo: "Dragon Ball",
    episodios: "300 episodios",
    descripcion: "Busca las esferas del dragón junto a Goku y sus amigos!",
  },
  {
    id: 2,
    titulo: "Gambito de Dama",
    episodios: "50 episodios",
    descripcion: "Una protagonista experta en el ajedrez.",
  },
  {
    id: 3,
    titulo: "Juego de Tronos",
    episodios: "100 episodios",
    descripcion: "Una aventura peligrosa con caballeros y dragones!",
  },
  {
    id: 4,
    titulo: "Pokemon",
    episodios: "200 episodios",
    descripcion: "Se un maestro Pokemon, atrapalos a todos!",
  },
];

console.log(series);

let contenedorSeries = document.createElement("div");
document.body.append(contenedorSeries);

for (let i = 0; i < series.length; i++) {
  const serieDiv = document.createElement("div");
  serieDiv.innerHTML = `<h2>${series[i].titulo}</h2>
<h3>${series[i].episodios}</h3> 
<h4>${series[i].descripcion}</h4>
`;
  serieDiv.className = "series";
  contenedorSeries.appendChild(serieDiv);
}

let descargas = document.createElement("h2");
descargas.innerHTML = `<h2>Descargas</h2>
`;
descargas.className = "descargas";
contenedorSeries.appendChild(descargas);

console.log(contenedorSeries);

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
