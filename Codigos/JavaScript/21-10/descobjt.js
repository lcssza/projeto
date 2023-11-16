const pessoa = {
    nome : "Lucas",
    sobrenome : "Souza",
    idade : 25,
    nacionalidade : "brasileiro"
}
//dessa forma a unica forma de achar as infos e chamando pessoa;
let { nome: name } = pessoa;
//dessa forma cria uma variavel nome, chamada name

let nomes = [ "Vitor", "Volnei", "Bryan"];
//um array normal, mas para atribuir um valor a um deles:
let { 1:pai} = nomes;
//estou separando o array 1 e colocando uma variavel nele, com o nome de pai
let {0:irmao1, 2: irmao2} = nomes;
//mesma coisa   

//spreadOperator: ...NomeDoArray
let numeros = [1,2,3]
let numeros2 = [...numeros, 4, 5, 6,]
//dessa forma, ele ja puxa a info do array numeros pra dentro do outro array
//mesma coisa pra objeto la de cima;
const pessoaNova = {
    ...pessoa,
    cidadeNatal: "Jaragua",
    cidadeAtual: "Guimaraes"}

//spreadOperator em funcao:    

function cadastroPessoa(info){
        let novo ={
        ...pessoaNova,
        cargo: "futuro prog",
        cargoAtual: "Poke artist"
    };
    return novo;
}

cadastroPessoa({assunto: "blablabla", racao: "da melhor"});

//restOperator: mesma coisa, ...alguma coisa
function minhaLista(...nomess){
    console.log(nomess)
}
minhaLista("Matheus", "Lucas", "Vitor");
