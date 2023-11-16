let nomes = [
  { nome: "Lucas", idade: 25 },
  { nome: "Vitor", idade: 21 },
  { nome: "Bryan", idade: 11 },
];
const name = ["Vitor", "Alisson", "Lucas"];
console.log(name.some(nome => nome ==="Lucas"))

console.log(nomes.every(nome =>nome.idade >= 18));
if(nomes.every(nome =>nome.idade >= 18)){
    console.log("Todos sao maiores de 18.")
}else{
    console.log("Tem alguem de menor.")
};