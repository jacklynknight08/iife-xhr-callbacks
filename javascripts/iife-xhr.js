console.log("IIFE-XHR JS");

//In the iife-xhr.js file, define two functions that will be executed after each type of animal is loaded 
//then display those animals in your DOM.

var outputDiv = document.getElementById("output")

function showCarnivores (carnivores) {
	carnivores = carnivores.join(", ");
	outputDiv.innerHTML += `<h2>Carnivores: ${carnivores}</h2>`;

}

function showHerbivores (herbivores) {
	herbivores = herbivores.join(", ");
	outputDiv.innerHTML += `<h2>Herbivores: ${herbivores}</h2>`;

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);