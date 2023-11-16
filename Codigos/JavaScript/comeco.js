//sempre para chamar uma funcao, e preciso colocar o () apos a mesma

function validatePassword(){
    var password = document.getElementById("password")
    var confirm_password = document.getElementById("confirm_password");
  if(password.value == confirm_password.value) {
    confirm_password.setCustomValidity("Senhas correta!");
  } else {
    confirm_password.setCustomValidity('Senha diferente');
  }
  console.log(password.value);
  console.log(confirm_password.value);
}

