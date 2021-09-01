var entrada = document.getElementById('estado');

function formato() {
 
  var palabra = entrada.value;
  if(!entrada.value) return;
  var mayus = palabra.substring(0,1).toUpperCase();
  if (palabra.length > 0) {
    var min = palabra.substring(1).toLowerCase();
  }
  entrada.value = mayus.concat(min);
}