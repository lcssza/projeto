function buscar() {
  const inputvalue = document.getElementById("procura").value;
  const target = document.getElementById("results");

  if (inputvalue == "bola") {
    const source = document.createElement("a");
    source.target = "_blank";
    source.textContent = "Bola 1";
    source.href =
      " http://ge.globo.com/nome-da-bola-2014/noticia/2012/08/jabulaaaaani-bola-da-africa-do-sul-e-mais-famosa-de-todas-copas.html";
    target.appendChild(source);
    target.appendChild(document.createElement("br"));

    const source2 = document.createElement("a");
    source2.target = "_blank";
    source2.textContent = "Bola 2";
    source2.href =
      " http://ge.globo.com/nome-da-bola-2014/noticia/2012/08/jabulaaaaani-bola-da-africa-do-sul-e-mais-famosa-de-todas-copas.html";
    target.appendChild(source2);
    target.appendChild(document.createElement("br"));

    const source3 = document.createElement("a");
    source3.target = "_blank";
    source3.textContent = "Bola 3";
    source3.href =
      " http://ge.globo.com/nome-da-bola-2014/noticia/2012/08/jabulaaaaani-bola-da-africa-do-sul-e-mais-famosa-de-todas-copas.html";
    target.appendChild(source3);
    target.appendChild(document.createElement("br"));
  }
}
