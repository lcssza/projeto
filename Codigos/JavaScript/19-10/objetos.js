function Carro(){
    this.marca = "Peugeot";
    this.nome = "207";
    this.ano = "2020";
    this.potencia = "100";
    this.velocidadeAtual = 0;

    this.ligar = function(){
        console.log(this.nome + " esta ligado")
    }
    this.andar = function(velocidade){
        console.log("Carro andando...")
        this.velocidadeAtual= this.velocidadeAtual + velocidade;
    }
    this.parar= function(){
        console.log("Carro parado")
        this.velocidadeAtual= 0;
    }

}
var carro1 = new Carro();
//se eu chamar carro1 no f12, ele vai aparecer esses dados
carro1.ano= "2000";
//assim eu mudo o ano, mesma coisa com os outros atributos
var carro2 = new Carro();
carro2.nome= "Onix";
carro2.marca= "Chevrolet";