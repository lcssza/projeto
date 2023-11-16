function buscaridade () {
    var idade1 = document.getElementById("valorIdade").value ;
    console.log(idade1);
}
//console log e so para retornar algo, variaveis e funcoes nao tem string

function entrar(){
    var area = document.getElementById('area');
    var texto =prompt('Digite seu nome');
    if(texto == '' || texto == null){
        alert('Digite seu nome novamente');
        area.innerHTML = 'Bem vindo... ';

    }else{
        area.innerHTML = 'Bem vindo ' + texto;

    }
// || significa ou, e usado no if ou, ex: se for isso, ou (||)
}
//o innerHTML retorna todo o texto e o html que existem no elemento.
// Ele retorna todo o html existente, retornando também às tags, e não somente o texto.
function entrar2(nome){
    var area = document.getElementById('area2');
    var texto =prompt('Digite seu sobrenome');
    area.innerHTML = "Bem vindo " + nome + " " + texto;
    console.log(area);
    
}
//Array: sempre dentro de colchetes, nomes dentro de aspas, numeros nao precisa. Ex:
var lista = ["Lucas", "Matheus", "Alisson", "Jessica", "Vitor", 12, "Snow", 1997]
// lista.length serve para mostrar o tamanho da lista, quantos itens tem
//lista[2] passa o item 2 da lista(lembrando que a lista sempre comeca no numero 0, entao o numero 2 da lista vai ser o terceiro item)
//lista.indexOf("Lucas") para encontrar a posicao no item desejado;
//lista.join(" / ") para passar a lista com o / no meio dos itens
//lista.pop(); ele remove o ultimo item da lista
//lista.shift(); remove o primeiro item da lista
//lista[0] = "Amarildo"; ele vai mudar o primeiro item da lista pro item que eu colocar, nesse caso foi de "Lucas" para "Amarildo";
//lista.push("Jean") vai adicionar um item na lista, na ultima posicao;
if(lista.indexOf("Vitor") > -1){
    alert("Esse item esta na lista!");
}else{
    alert("Opa, nao foi encontrado")
}
