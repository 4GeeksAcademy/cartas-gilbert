import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palos = [
  { nombre: "picas", icono: "bi-suit-spade-fill", color: "black" },
  { nombre: "treboles", icono: "bi-suit-club-fill", color: "black" },
  { nombre: "corazon", icono: "bi-suit-heart-fill", color: "red" },
  { nombre: "diamantes", icono: "bi-suit-diamond-fill", color: "red" }
];

let numeros = ["2","3","4","5","6","7","8","9","10"];

function nuevaCarta() {
  let palo = palos[Math.floor(Math.random() * palos.length)];
  let numero = numeros[Math.floor(Math.random() * numeros.length)];

  // Mostrar número en el centro
  const top = document.querySelector(".top");
  const bottom = document.querySelector(".bottom");
  const center = document.querySelector(".center");

  // Poner el número en el centro (texto)
  center.textContent = numero;
  // Asegurarnos de que el centro no tenga clases de icono
  center.className = "center";
  center.style.color = "inherit";

  // Limpiar y asignar iconos en top y bottom
  top.className = "top"; // limpiar clases previas
  bottom.className = "bottom";
  top.classList.add("bi", palo.icono);
  bottom.classList.add("bi", palo.icono);
  top.style.color = palo.color;
  bottom.style.color = palo.color;
}

document.getElementById("btn").addEventListener("click", nuevaCarta);

nuevaCarta();
