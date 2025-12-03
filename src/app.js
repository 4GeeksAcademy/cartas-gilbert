import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palos = [
  { nombre: "picas", icono: "bi-suit-spade-fill", color: "black },
  { nombre: "trboles", icono: "bi-suit-club-fill", color: "black" },
  { nombre: "corazon", icono: "bi-suit-heart-fill", color: "red" },
  { nombre: "diamantes", icono: "bi-suit-diamond-fill", color: "red" }
];

let numeros = ["2","3","4","5","6","7","8","9","10"];

function nuevaCarta() {
  let palo = palos[Math.floor(Math.random() * palos.length)];
  let numero = numeros[Math.floor(Math.random() * numeros.length)];

  document.querySelector(".top").textContent = numero;
  document.querySelector(".bottom").textContent = numero;

  let center = document.querySelector(".center");

  // Reiniciar clases y asignar las clases de Bootstrap Icons
  center.className = "center"; // limpiar clases previas
  center.classList.add("bi", palo.icono);
  center.style.color = palo.color;
}

document.getElementById("btn").addEventListener("click", nuevaCarta);

nuevaCarta();
