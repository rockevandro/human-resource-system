
document.querySelectorAll("select").forEach(element => {
    element.addEventListener("change", () => {
        validate();
    })
})

document.querySelector("#resetId").addEventListener("click", () => {
    document.querySelectorAll("select").forEach(element => {
        element.disabled = false
    })
})

function validate() {
    
    const combinationArray =  ["20,11,02","00,11,22","00,01,02","10,11,12", "20,21,22","00,10,20","01,11,21","02,12,22"];
    let positionValueArray = [];
    let count = 0;

    document.querySelectorAll("select").forEach(element => {
        positionValueArray.push( { position : element.id.replace("opcao", ""), value : element.value})
    })

    combinationArray.forEach(combinations => {
        let combinationString = "";
        combinations.split(',').forEach(combination => {
            let positionValue = positionValueArray.find(positionValue => positionValue.position == combination)
            if(positionValue)
                combinationString += positionValue.value
        })
        if(combinationString === "XXX"){
            scoreIncrement("X")
            return;    
        } else if(combinationString === "OOO"){
            scoreIncrement("O")
            return;
        }
    })

    document.querySelectorAll("select").forEach(element => {
        if(element.value == "X" || element.value == "O")
            count++;

        if(count == 9){
            disableAll();
        }
    })
}

function scoreIncrement(winner){
    let resultElement = document.getElementById("resultId" + winner)
    resultElement.value = Number(resultElement.value) + 1;
    disableAll()
}

function disableAll(){
    document.querySelectorAll("select").forEach(element => {
        element.disabled = true
    })
}
