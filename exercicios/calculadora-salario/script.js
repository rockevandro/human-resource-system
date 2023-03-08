let inputSalario = document.getElementById("salario")
let inputInss = document.getElementById("inss")
let inputSalarioLiquido = document.getElementById("salarioLiquido")

function calcular(){
    
    let calculo = inputSalario.value * (inputInss.value / 100)
    let resultado = inputSalario.value - calculo
    
    let inputSalarioLiquido = document.getElementById("salarioLiquido")
    inputSalarioLiquido.value = `R$  ${resultado.toFixed(2)}`
}