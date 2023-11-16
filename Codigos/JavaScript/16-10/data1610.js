// formula: peso/(altura*altura);

// toFixed(algum numero) e para definir as casas decimais que voce quer que retorne;
var peso;
var altura;
var IMC;
var Resultado;

function calcular() {
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  IMC = peso / (altura * altura);
  if (IMC < 17) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "Seu resultado foi: " +
      IMC.toFixed(2) +
      "<br/> Cuidado! Voce esta muito abaixo do peso! <br/>";
  } else if (IMC > 17 && IMC < 18.49) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "Seu resultado foi: " +
      IMC.toFixed(2) +
      "<br/>  Voce esta abaixo do peso! <br/>";
  } else if (IMC > 18.5 && IMC < 24.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "Seu resultado foi: " +
      IMC.toFixed(2) +
      "<br/>  Voce esta no peso ideal! <br/>";
  } else if (IMC > 25 && IMC < 29.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "Seu resultado foi: " +
      IMC.toFixed(2) +
      "<br/>  Voce esta acima do peso! <br/>";
  }
}


