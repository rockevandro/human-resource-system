function calcular(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    
    let num1value = Number(num1.value);
    let num2value = Number(num2.value);

    let resultado = num1value + num2value
    
    let inputResultado = document.getElementById("resultado")
    inputResultado.value = resultado
}
