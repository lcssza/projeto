//Eventos de teclado
function tecladoParaBaixo(event) {
  console.log("O teclado esta clicado" + " " + event.keyCode);
}
function tecladoParaCima(event) {
  console.log("O teclado subiu" + " " + event.keyCode);
}
function tecladoClicado(event) {
  console.log("O teclado foi clicado" + " " + event.keyCode);
  if (event.keyCode == 13) {
    alert("Voce clicou no enter!");
  }
}
//da pra usar o event.ctrlKey, ou event.shiftKey tb pra retornar booleano(
//true or false)

function focado() {
  console.log("Campo focado");
}
function desfocado() {
  console.log("Campo desfocado");
}
function selecionada(objeto) {
  console.log("Cidade selecionada:" + objeto.value);
  if (objeto.value == "Blumenau") {
    alert("Voce acertou!");
  } else {
    objeto.value = "Blumenau";
    alert("Voce errou!");
  }
}

function criarBalao() {
  var balao = document.createElement("div");
  balao.setAttribute("class", "balao");
  var x = Math.floor(Math.random() * 600);
  var y = Math.floor(Math.random() * 400);

  balao.setAttribute("style", "left: " + x + "px; top:" + y + "px;");
  balao.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(balao);
}
function estourar(objeto){
    document.body.removeChild(objeto);
}