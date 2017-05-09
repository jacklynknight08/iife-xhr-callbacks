console.log("Predator JS");

//Create an IIFE with the name of Predator.
//Predator should have two private arrays to store carnivores and herbivores.
//Predator should expose two public functions to load each JSON file and store the array of
//animals in the appropriate private array. Each of those functions should accept one argument
//that will store the callback function to be executed.

//In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, after each file is loaded.

var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.

        callbackToInvoke(carnivores);
      });

      loader.open("GET", "carnivore.json");
      loader.send();
    },

    loadHerbivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function() {
        herbivores = JSON.parse(this.responseText);

        callbackToInvoke(herbivores);
      });

      loader.open("GET", "herbivore.json");
      loader.send();
    }
  }
})(Predator || {});