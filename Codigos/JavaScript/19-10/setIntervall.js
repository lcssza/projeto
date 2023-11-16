function executar(){
    document.write("Executando... <br/>")
}
function executar2(){
    document.write("Um, dois, tres... <br/>")
}
// set interval executa de tempo em tempo o que foi pedido, os segundos sao
//em milisegundos, ou seja, 1000 eh um segundo;
//clearInterval(timer) vai parar o setInterval
var timer = setInterval(executar, 1000);
// timeout executa uma vez e para
setTimeout(executar2,3000);