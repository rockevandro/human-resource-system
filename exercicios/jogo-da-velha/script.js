let inputNomeX = document.getElementById("nomeX")
let inputNomeO = document.getElementById("nomeO")
let inputOpcao00 = document.getElementById("opcao00")
let inputOpcao01 = document.getElementById("opcao01")
let inputOpcao02 = document.getElementById("opcao02")
let inputOpcao10 = document.getElementById("opcao10")
let inputOpcao11 = document.getElementById("opcao11")
let inputOpcao12 = document.getElementById("opcao12")
let inputOpcao20 = document.getElementById("opcao20")
let inputOpcao21 = document.getElementById("opcao21")
let inputOpcao22 = document.getElementById("opcao22")

let inputGanhador = document.getElementById("ganhador")
let inputResultadoX = document.getElementById("resultadoX")
let inputResultadoO = document.getElementById("resultadoO")

function verificarGanhador(){
                    // VERIFICA RESULTADO DO "X"
    if(inputOpcao20.value === "X" && inputOpcao11.value === "X" && inputOpcao02.value === "X"){
        inputResultadoX.value = Number(inputResultadoX.value) + 1
    }
    if(inputOpcao00.value === "X" && inputOpcao01.value === "X" && inputOpcao02.value === "X"){ // HORIZONTAL 1
        inputResultadoX.value = Number(inputResultadoX.value) + 1
    }
    if(inputOpcao10.value === "X" && inputOpcao11.value === "X" && inputOpcao12.value === "X"){ // HORIZONTAL 2
        inputResultadoX.value = Number(inputResultadoX.value) + 1
    }
    if(inputOpcao20.value === "X" && inputOpcao21.value === "X" && inputOpcao22.value === "X"){ // HORIZONTAL 3
        inputResultadoX.value = Number(inputResultadoX.value) + 1
    }
    if(inputOpcao00.value === "X" && inputOpcao10.value === "X" && inputOpcao20.value === "X"){ // VERTICAL 1
        inputResultadoX.value = Number(inputResultadoX.value) + 1
    }
    if(inputOpcao01.value === "X" && inputOpcao11.value === "X" && inputOpcao21.value === "X"){ // VERTICAL 2
        inputResultadoX.value = Number(inputResultadoX.value) + 1
    }
    if(inputOpcao02.value === "X" && inputOpcao12.value === "X" && inputOpcao22.value === "X"){ // VERTICAL 3
        inputResultadoX.value = Number(inputResultadoX.value) + 1
    }
    if(inputOpcao00.value === "X" && inputOpcao11.value === "X" && inputOpcao22.value === "X"){ 
        inputResultadoX.value = Number(inputResultadoX.value) + 1
    }
                    // VERIFICA RESULTADO DO "O"
    if(inputOpcao20.value === "O" && inputOpcao11.value === "O" && inputOpcao02.value === "O"){
        inputResultadoO.value = Number(inputResultadoO.value) + 1
    }
    if(inputOpcao00.value === "O" && inputOpcao01.value === "O" && inputOpcao02.value === "O"){ // HORIZONTAL 1
        inputResultadoO.value = Number(inputResultadoO.value) + 1
    }
    if(inputOpcao10.value === "O" && inputOpcao11.value === "O" && inputOpcao12.value === "O"){ // HORIZONTAL 2
        inputResultadoO.value = Number(inputResultadoO.value) + 1
    }
    if(inputOpcao20.value === "O" && inputOpcao21.value === "O" && inputOpcao22.value === "O"){ // HORIZONTAL 3
        inputResultadoO.value = Number(inputResultadoO.value) + 1
    }
    if(inputOpcao00.value === "O" && inputOpcao10.value === "O" && inputOpcao20.value === "O"){ // VERTICAL 1
        inputResultadoO.value = Number(inputResultadoO.value) + 1
    }
    if(inputOpcao01.value === "O" && inputOpcao11.value === "O" && inputOpcao21.value === "O"){ // VERTICAL 2
        inputResultadoO.value = Number(inputResultadoO.value) + 1
    }
    if(inputOpcao02.value === "O" && inputOpcao12.value === "O" && inputOpcao22.value === "O"){ // VERTICAL 3
        inputResultadoO.value = Number(inputResultadoO.value) + 1
    }
    if(inputOpcao00.value === "O" && inputOpcao11.value === "O" && inputOpcao22.value === "O"){ 
        inputResultadoO.value = Number(inputResultadoO.value) + 1
    }
    ganhador()
}
limpaJogo()
function limpaJogo(){
    inputOpcao00.value = " "
    inputOpcao01.value = " "
    inputOpcao02.value = " "
    inputOpcao10.value = " "
    inputOpcao11.value = " "
    inputOpcao12.value = " "
    inputOpcao20.value = " "
    inputOpcao21.value = " "
    inputOpcao22.value = " "
}

function ganhador(){
if(inputResultadoX.value === "3"){
inputGanhador.value = `${inputNomeX.value} venceu a Partida!!`
}
if(inputResultadoO.value === "3"){
    inputGanhador.value = `${inputNomeO.value} venceu a Partida!!`
    }
}