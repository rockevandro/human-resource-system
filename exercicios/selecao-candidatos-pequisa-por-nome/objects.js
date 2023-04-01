//
console.log("variavél com valor no conteúdo")
const idade = 10
const ano = 1989

console.log(idade)
calculaIdadeValor(ano, idade)

console.log(idade)

//
console.log("variavél com array no conteúdo")
const idades = [10]

console.log(idades)
idades.push(20)
//idades = [10, 20]

console.log(idades)

//
console.log("variavél com objeto no conteúdo")
const idadeObjeto = { idade: 10, anoDoNascimento: 1989 }

console.log(idadeObjeto)
calculaIdadeValor(idadeObjeto.anoDoNascimento, idadeObjeto.idade)
console.log(idadeObjeto)

// function calculaIdade(objetoComAno){
//     const idade = new Date().getFullYear() - objetoComAno.anoDoNascimento
//     objetoComAno.idade = idade
// }

function calculaIdadeValor(anoNascimento, idadeAtual){
    const idade = new Date().getFullYear() - anoNascimento
    idadeAtual = idade
    console.log(idadeAtual)
}
