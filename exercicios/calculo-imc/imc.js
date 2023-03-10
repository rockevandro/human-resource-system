let elementoResultado = document.getElementById("resultado")
let elementoClassificacao = document.getElementById("classificacao")

function calculaImc(){
    let valorPeso = document.getElementById("peso").value
    let valorAltura = document.getElementById("altura").value
    
    let valorResultado = valorPeso / (valorAltura * valorAltura)
    elementoResultado.value = valorResultado.toFixed(0)

    if(valorResultado < 18.5){
        elementoClassificacao.textContent = "Abaixo do peso"
    }

    if(valorResultado >= 18.5 && valorResultado < 24.9){
        elementoClassificacao.textContent = "Peso normal"
    }

    if(valorResultado >= 24.9 && valorResultado < 29.9){
        elementoClassificacao.textContent = "Acima do peso"
    }

    elementoClassificacao.textContent = elementoClassificacao.textContent.toUpperCase()
}