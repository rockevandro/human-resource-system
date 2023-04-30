const selectCandidato = document.getElementById("selectCandidato")

const inputNome = document.getElementById("nome")
const inputIdade = document.getElementById("idade")
const inputEscolaridade = document.getElementById("escolaridade")
const inputAnosExperiencia = document.getElementById("anosExperiencia")
const inputFumante = document.getElementById("fumante")

const listaDadosCandidatos = JSON.parse(localStorage.getItem("candidatos"))

for (let i = 0; i < listaDadosCandidatos.length; i = i + 1) {
    const candidato = listaDadosCandidatos[i]
    selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.id}'>${candidato.nome}</option>`)
}

function preencherDadosCandidato() {
    const idCandidatoSelecionado = Number(selectCandidato.value)
    const listaFiltrada = listaDadosCandidatos.filter((candidato) => candidato.id === idCandidatoSelecionado)

    const [candidatoFiltrado] = listaFiltrada

    inputNome.value = candidatoFiltrado.nome
    inputIdade.value = candidatoFiltrado.idade
    inputEscolaridade.value = candidatoFiltrado.escolaridade
    inputAnosExperiencia.value = candidatoFiltrado.anosExperiencia
    inputFumante.checked = candidatoFiltrado.fumante
}
