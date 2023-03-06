
  let palavraIngles1 = "computer";
  let palavraPortugues1 = "computador";
  let palavraEspanhol1 = "computadora";

function traduzParaPortugues() {
  let palavraDigitada = document.getElementById("palavra");
  let traducaoPalavras = document.getElementById("traducao");

  if (palavraDigitada.value === palavraIngles1) {
    traducaoPalavras.value = palavraPortugues1;
  }
  if (palavraDigitada.value === palavraEspanhol1) {
    traducaoPalavras.value = palavraPortugues1;
  }
}

function traduzParaIngles() {
  let palavraDigitada = document.getElementById("palavra");
  let traducaoPalavras = document.getElementById("traducao");

  if (palavraDigitada.value === palavraPortugues1) {
    traducaoPalavras.value = palavraIngles1;
  } else if (palavraDigitada.value === palavraEspanhol1) {
    traducaoPalavras.value = palavraIngles1;
  }
}
function traduzParaEspanhol() {
  let palavraDigitada = document.getElementById("palavra");
  let traducaoPalavras = document.getElementById("traducao");

  if (palavraDigitada.value === palavraPortugues1) {
    traducaoPalavras.value = palavraEspanhol1;
  } else if (palavraDigitada.value === palavraIngles1) {
    traducaoPalavras.value = palavraEspanhol1;
  }
}
