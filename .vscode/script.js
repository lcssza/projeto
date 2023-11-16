function toggleMode() {
  const html = document.documentElement
  //toggle já é uma função existente
  html.classList.toggle("light")
  //isso de cima pode ser substituido por:
  //if (html.classList.contains("light")) { aqui eu entrei no html, na classe, e disse se conter light
  //html.classList.remove("light") aqui falei pra ele remover o light
  //} else { aqui é o se não
  // html.classList.add("light") aqui mandei adicionar light
  //}
}
