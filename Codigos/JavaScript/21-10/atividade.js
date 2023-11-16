/*Crie uma lista de produtos

A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.

Mostre no console quantos produtos tem nessa lista.

Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.

Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console
 falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado.

Remova o segundo item da sua lista. */
var lista = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(lista);
lista.splice(2, 1);
console.log(lista);
var pc = lista.indexOf("Computador");
console.log(pc);
if(pc == 0){
    console.log("Este item e o computador")
}
console.log(lista.includes("Computador"));
//includes procura no array se tem o item, e devolve booleano;
var myName = "Lucas";
console.log(myName.endsWith("s"));
// endsWith procura se a variavel termina com o que foi colocado dentro, nesse caso o "s";
console.log(myName.startsWith("Lu"));
//startsWith procura se a variavel comeca com o que foi declarado, nesse caso "Lu";
