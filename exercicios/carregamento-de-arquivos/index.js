fetch("http://127.0.0.1:5500/exercicios/carregamento-de-arquivos/dados.json")
    .then((respostaFetch) => respostaFetch.json())
    .then(incluiDados)


function incluiDados(respostaJson) {
    respostaJson.forEach((pessoa) =>
        document.getElementById("dados").innerHTML += `${pessoa.nome} - ${pessoa.idade}<br><br>`)
}