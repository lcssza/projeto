//localStorage.setItem("Nome", "Lucas");
//eu seto o nome Lucas no f12, para buscar o item eu uso
//localStorage.getItem("Nome"); ele traz o Lucas
//
var nome = "";
if (typeof localStorage.nome == "undefined") {
  localStorage.nome = prompt("Qual seu nome?");
}
nome = localStorage.nome;
document.getElementById("nome").innerHTML = nome;
//buscando dentro da div app a ul

//querySelector pega a primeira coisa que achar do que tu selecionou, por exemplo o primeiro ul, ou input, ou button nesses casos, dentro do #app
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var toDos = ["Ir a lavanderia", "Ir a academia", "Trabalhar", "Estudar JS"];

function rendertoDos() {
  listElement.innerHTML = "";

  for (toDo of toDos) {
    console.log(toDo);
// createElement ele cria um elemento dentro do codigo
    var toDoElement = document.createElement("li");
    var toDoText = document.createTextNode(toDo);

    var linkElement= document.createElement("a");
    linkElement.setAttribute("href", "#");

    var posicao= toDos.indexOf(toDo);
    linkElement.setAttribute("onclick","deletarToDo("+ posicao +")")

    var linkText= document.createTextNode("Excluir");
    linkElement.appendChild(linkText);

    toDoElement.appendChild(toDoText);
    toDoElement.appendChild(linkElement);
    listElement.appendChild(toDoElement);
  }
}
rendertoDos();

function adicionarToDo() {
    if(inputElement.value == ""){
        return false;
    }else{var toDoText = inputElement.value;
        toDos.push(toDoText);
        inputElement.value= "";
        rendertoDos();
    }
}
buttonElement.onclick = adicionarToDo;

function deletarToDo(posicao){
    //splice deleta o elemento da lista que tu colocar, na posicao que colocar
    toDos.splice(posicao, 1)
    rendertoDos();
}
//Para usar o createTextNode:
//Ele insere um texto dentro de um elemento criado 

var elemento_pai = document.body;
var titulo       = document.createElement('h1');
var texto        = document.createTextNode("Um titulo qualquer");
titulo.appendChild(texto);
elemento_pai.appendChild(titulo);
