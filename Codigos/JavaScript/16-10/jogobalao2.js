var total = 0;

function criarBalao() {
  var balao = document.createElement("div");
  var x = Math.floor(Math.random() * 600);
  var y = Math.floor(Math.random() * 400);

  balao.setAttribute("style", "left: " + x + "px; top:" + y + "px;");

  if (sortearBalao() == 1) {
    balao.setAttribute("class", "balao1");
    balao.setAttribute("onclick", "estourar(this)");
  } else {
    balao.setAttribute("onclick", "gameOver()");
    balao.setAttribute("class", "balao");
  }
  document.body.appendChild(balao);
}

function estourar(objeto) {
  document.body.removeChild(objeto);
  total++;
  var score = document.getElementById("total");
  score.innerHTML = "Baloes estourados:" + total;
}
function carregarJogo() {
  setInterval(criarBalao, 500);
}

function sortearBalao() {
  return Math.floor(Math.random() * 2);
}
function gameOver() {
  var confirmado = confirm("Voce perdeu o jogo, gostaria de jogar novamente?");
  if (confirmado == true) {
    location.reload();
  }
}
