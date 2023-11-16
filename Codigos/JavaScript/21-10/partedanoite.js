function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ]
    return console.log(totalUsuarios);

}

let usuarios = ["Lucas, Vitor"];
let novosUsuarios = cadastrar(usuarios, "Matheus", "Joao", "Snow"); 
//['Lucas, Vitor', 'Matheus', 'Joao', 'Snow']

const lista = [1,2,3,4,5];//vetor
const novaLista =  lista.map(function(item, index){
//return item *10;
return item + index;
});
console.log(novaLista); //[1, 3, 5, 7, 9]
//map ele passa pelo vetor todo lendo e retorna o que esta sendo pedido


const list = ["notebook", "sofa", "TV", "cobertor"]
const newList = list.map(function(item, index){
    return item + index;
})
console.log(newList);//// ['notebook0', 'sofa1', 'TV2', 'cobertor3'] 

var times = [ "Sao paulo", "Corinthians", "Flamengo", "Santos"]
var melhoresTimes = times.map(function(item){
return item + " melhorado"
})
console.log(melhoresTimes); // ['Sao paulo melhorado', 'Corinthians melhorado', 'Flamengo melhorado', 'Santos melhorado']

var selecoes = ["Franca ", "Brasil ", "Argentina ", "Portugal "];
var MelhoresSelecoes = selecoes.map(function(item, index){
return item + index;
})
console.log(MelhoresSelecoes); // ['Franca 0', 'Brasil 1', 'Argentina 2', 'Portugal 3']
//reduce pega o vetor e reduz a um so, somando tudo, se for numero fica um so, se for array soma todos os arrays e coloca junto
const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});
console.log(soma); //15 pq e a soma de todos os numeros da lista la de cima
//
const somaTimes = times.reduce(function(total, proximo){
    return total + proximo;
});
console.log(somaTimes); //Sao pauloCorinthiansFlamengoSantos