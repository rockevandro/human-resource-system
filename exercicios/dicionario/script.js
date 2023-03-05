let inputPalavra = document.getElementById("palavra")
let botaoIngles = document.getElementById("ingles")
let botaoPortugues = document.getElementById("portugues")
let botaoEspanhol = document.getElementById("espanhol")
let inputTraducao = document.getElementById("traducao")

function traduz(event){
    let valorDoInput = inputPalavra.value
    if(event.target.id == botaoIngles.id){ //NESSE IF TRADUZ AS PALAVRAS PARA INGLES
        if(valorDoInput.toLowerCase() == "batata" || valorDoInput.toLowerCase()== "potato" || valorDoInput.toLowerCase()=="papa"){
            inputTraducao.value = "Potato"
        }else {
        if(valorDoInput.toLowerCase() == "feijao" || valorDoInput.toLowerCase()== "frijol" || valorDoInput.toLowerCase()== "bean"){
            inputTraducao.value = "Bean"
        }
        }
        if(valorDoInput.toLowerCase() == "goiaba" || valorDoInput.toLowerCase()== "guava" || valorDoInput.toLowerCase()== "guayaba"){
            inputTraducao.value = "Guava"
        }
    
    }
    if(event.target.id == botaoPortugues.id){ //NESSE IF TRADUZ AS PALAVRAS PARA PORTUGUES
        if(valorDoInput.toLowerCase() == "potato" || valorDoInput.toLowerCase()== "papa" || valorDoInput.toLowerCase()== "batata"){
            inputTraducao.value = "Batata"
        }
        if(valorDoInput.toLowerCase() == "feijao" || valorDoInput.toLowerCase()== "frijol" || valorDoInput.toLowerCase()== "bean"){
            inputTraducao.value = "Feijão"
        }
        if(valorDoInput.toLowerCase() == "goiaba" || valorDoInput.toLowerCase()== "guava" || valorDoInput.toLowerCase()== "guayaba"){
            inputTraducao.value = "Goiaba"
        }
    } 
    if(event.target.id == botaoEspanhol.id){ //NESSE IF TRADUZ AS PALAVRAS PARA ESPANHOL
        if(valorDoInput.toLowerCase() == "batata" || valorDoInput.toLowerCase()== "papa" || valorDoInput.toLowerCase()== "potato"){
            inputTraducao.value = "Papa"
        }
        if(valorDoInput.toLowerCase() == "goiaba" || valorDoInput.toLowerCase()== "guava" || valorDoInput.toLowerCase()== "guayaba"){
            inputTraducao.value = "Guayaba"
        }
        if(valorDoInput.toLowerCase() == "feijao" || valorDoInput.toLowerCase()== "frijol" || valorDoInput.toLowerCase()== "bean"){
            inputTraducao.value = "Frijol"
        }
    }
}


