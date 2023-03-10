


function calcularSalarioLiquido(){
    let salarioBruto = document.getElementById("salarioBruto")
    let percentualInss = document.getElementById("inss")
    let salarioLiquido = document.getElementById("salarioLiquido")

    let salarioBruto1 = salarioBruto.value
    let percentualInss1 = percentualInss.value

     let calculoPorcentagem= salarioBruto1 * percentualInss1/100
     
     salarioLiquido.value = salarioBruto1 - calculoPorcentagem

    
     }
