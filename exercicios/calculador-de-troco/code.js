let inputValorProduto = document.getElementById("precoProduto")
let inputDineiroRecebido = document.getElementById("valorCliente")
let botaoCalcular = document.getElementById("calcularTroco")
let inputTroco = document.getElementById("troco")

let preco = Number(inputValorProduto.value)
let valor = Number(inputDineiroRecebido.value)
let troco = inputTroco.value

function calculaTroco() {
    let preco = Number(inputValorProduto.value)
    let valor = Number(inputDineiroRecebido.value)
    let resultado = valor - preco
    inputTroco.value = ` R$: ${resultado.toFixed(2)}`
}
