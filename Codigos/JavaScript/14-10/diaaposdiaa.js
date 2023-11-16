function calcularnota() {
  var nota1 = document.getElementById("primeiraNota").value;
  console.log(nota1);
}
function calcularnota2() {
  var nota2 = document.getElementById("segundaNota").value;
  console.log(nota2);
}
//while = enquanto, e um looping;
x = 0;
while (x < 10) {
  document.write(" <br/> o valor de x:" + x);
  x++;
  //x++ e igual a x + x + 1;
}
//for = para, em vez de passar uma condicao igual o while, a gente passa 3;
//ou seja, e um looping
for (a = 0; a < 10; a++) {
  document.write(" <br/> o valor de A:" + a);
}

//switch
var x = 2;
switch (x) {
  case 0:
    alert("o x e igual a 0");
    break;
  case 1:
    alert("o x e igual a 1");
    break;
  case 2:
    alert("o x e igual a 2");
    break;
}
