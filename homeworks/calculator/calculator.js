document.addEventListener('DOMContentLoaded', () => { });

let resultado;

document.getElementById("btn-soma").addEventListener("click", function(){

  let entrada1 = parseInt(document.getElementById('entrada-1').value);
  let entrada2 = parseInt(document.getElementById('entrada-2').value);

  resultado = entrada1 + entrada2;

  document.getElementById("resultado").innerHTML = resultado;

});

document.getElementById("btn-subtracao").addEventListener("click", function(){

  let entrada1 = parseInt(document.getElementById('entrada-1').value);
  let entrada2 = parseInt(document.getElementById('entrada-2').value);

  resultado = entrada1 - entrada2;

  document.getElementById("resultado").innerHTML = resultado;

});

document.getElementById("btn-multiplicacao").addEventListener("click", function(){

  let entrada1 = parseInt(document.getElementById('entrada-1').value);
  let entrada2 = parseInt(document.getElementById('entrada-2').value);

  resultado = entrada1 * entrada2;

  document.getElementById("resultado").innerHTML = resultado;

});

document.getElementById("btn-divisao").addEventListener("click", function(){

  let entrada1 = parseInt(document.getElementById('entrada-1').value);
  let entrada2 = parseInt(document.getElementById('entrada-2').value);

  resultado = entrada1 / entrada2;

  document.getElementById("resultado").innerHTML = resultado;

});

