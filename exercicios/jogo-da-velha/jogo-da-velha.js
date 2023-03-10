let posicao00 = document.getElementById("opcao00")
let posicao01 = document.getElementById("opcao01")
let posicao02 = document.getElementById("opcao02")
let posicao10 = document.getElementById("opcao10")
let posicao11 = document.getElementById("opcao11")
let posicao12 = document.getElementById("opcao12")
let posicao20 = document.getElementById("opcao20")
let posicao21 = document.getElementById("opcao21")
let posicao22 = document.getElementById("opcao22")

let jogadorX = document.getElementById("jogadorX")
let jogadorO = document.getElementById("jogadorO")
let resultadoX = document.getElementById("resultX")
let resultadoO = document.getElementById("resultO")
let mostraResultado = document.getElementById("mostraResultado")

function verificaInput(){
    if(posicao00.value === "X" && posicao01.value === "X" && posicao02.value === "X"){  //horizontal 1
        resultadoX.value = Number(resultadoX.value) + 1
    }
    if(posicao10.value === "X" && posicao11.value === "X" && posicao12.value === "X"){ // horizontal 2
        resultadoX.value = Number(resultadoX.value) + 1
    }
    if(posicao20.value === "X" && posicao21.value === "X" && posicao22.value === "X"){// horizontal 3
        resultadoX.value = Number(resultadoX.value) + 1
    }
    if(posicao00.value === "X" && posicao10.value === "X" && posicao20.value === "X"){ // vertical 1
        resultadoX.value = Number(resultadoX.value) + 1
    }
    if(posicao01.value === "X" && posicao11.value === "X" && posicao21.value === "X"){ // vertical 2
        resultadoX.value = Number(resultadoX.value) + 1 
    }
    if(posicao02.value === "X" && posicao12.value === "X" && posicao22.value === "X"){ //vertical 3
        resultadoX.value = Number(resultadoX.value) + 1
    }
    if(posicao00.value === "X" && posicao11.value === "X" && posicao22.value === "X"){// diagonal 1
        resultadoX.value = Number(resultadoX.value) + 1

    }
    if(posicao02.value === "X" && posicao11.value === "X" && posicao20.value === "X"){ //diagonal 2
        resultadoX.value = Number(resultadoX.value) + 1
    } 
    /////----------------------------------------------------------------------
    if(posicao00.value === "O" && posicao01.value === "O" && posicao02.value === "O" ){ // horizontal 1
        resultadoO.value = Number(resultadoO.value) + 1
    }
    if(posicao10.value === "O" && posicao11.value === "O" && posicao12.value === "O" ){ // horizontal 2
        resultadoO.value = Number(resultadoO.value) + 1
    }
    if(posicao20.value === "O" && posicao21.value === "O" && posicao22.value === "O" ){ // horizontal 3
        resultadoO.value = Number(resultadoO.value) + 1
    }
    if(posicao00.value === "O" && posicao10.value === "O" && posicao20.value === "O" ){ // vertical 1
        resultadoO.value = Number(resultadoO.value) + 1 
    }
    if(posicao01.value === "O" && posicao11.value === "O" && posicao21.value === "O" ){ // vertical 2
        resultadoO.value = Number(resultadoO.value) + 1
    }
    if(posicao02.value === "O" && posicao12.value === "O" && posicao22.value === "O" ){ // vertical 3
        resultadoO.value = Number(resultadoO.value) + 1
    }
    if(posicao00.value === "O" && posicao11.value === "O" && posicao22.value === "O" ){ // diagonal 1
        resultadoO.value = Number(resultadoO.value) + 1
    }
    if(posicao02.value === "O" && posicao11.value === "O" && posicao20.value === "O" ){ // diagonal 2
        resultadoO.value = Number(resultadoO.value) + 1
    }
    mostraGanhadorJogo()
}

function limparJogo(){
    posicao00.value = " "
    posicao01.value = " "
    posicao02.value = " "
    posicao10.value = " "
    posicao11.value = " "
    posicao12.value = " "
    posicao20.value = " "
    posicao21.value = " "
    posicao22.value = " "
}
function mostraGanhadorJogo(){
    if(resultadoX.value === "3"){
        mostraResultado.value = `${jogadorX.value} venceu!` 
    }
    if(resultadoO.value === "3"){
        mostraResultado.value = `${jogadorO.value} venceu!`
    }
}
