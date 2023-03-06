function calculaTroco(){
    let preco = document.getElementById("precoProduto");
    let valorRecebido = document.getElementById("valorCliente");

    let precosvalue= Number(preco.value);
    let valoresRecebidosValue= Number(valorRecebido.value);

    if( valoresRecebidosValue < precosvalue){

        let elementoInputAPagar = document.getElementById("aPagar");
        let valorAPagar = precosvalue - valoresRecebidosValue
        elementoInputAPagar.value = valorAPagar

    } else if (valoresRecebidosValue > precosvalue){
        let valorTroco =  valoresRecebidosValue - precosvalue 
        let resultado = document.getElementById("troco");
        resultado.value = valorTroco
    } else{
        let elementoMensagem = document.getElementById("mensagemNaoTemTroco")
        elementoMensagem.textContent = "Não tem troco!"

    }
}

