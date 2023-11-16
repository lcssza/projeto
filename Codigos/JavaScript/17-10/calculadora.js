var valorAtual = 0;
function getValor() {
  return parseInt(document.getElementById("numeroUm").value);
}
function somar() {
  const valor = getValor();
  valorAtual = valorAtual + valor;
  resultado = document.getElementById('score');
  resultado.innerHTML= ('O resultado da conta e: ') + valorAtual;
  console.log(valorAtual);
}
function subtrair() {
  const valor = getValor();
  valorAtual = valorAtual - valor;
  resultado = document.getElementById('score');
  resultado.innerHTML= ('O resultado da conta e: ') + valorAtual;
  console.log(valorAtual);
}
function multiplicar() {
  const valor = getValor();
  valorAtual = valorAtual * valor;
  resultado = document.getElementById('score');
  resultado.innerHTML= ('O resultado da conta e: ') + valorAtual;
  console.log(valorAtual);
}
function dividir() {
  const valor = getValor();
  valorAtual = valorAtual / valor;
  resultado = document.getElementById('score');
  resultado.innerHTML= ('O resultado da conta e: ') + valorAtual;
  console.log(valorAtual);
}
