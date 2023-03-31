const selectCandidato = document.getElementById("selectCandidato")

const inputNome = document.getElementById("nome")
const inputIdade = document.getElementById("idade")
const inputEscolaridade = document.getElementById("escolaridade")
const inputAnosExperiencia = document.getElementById("anosExperiencia")
const inputFumante = document.getElementById("fumante")

const listaDadosCandidatos = [
    {
        "numero": 1,
        "nome": "Joaquim da Silva",
        "idade": 75,
        "escolaridade": "4° série",
        "anosExperiencia": 60,
        "fumante": true
    },
    {
        "numero": 2,
        "nome": "Ana",
        "idade": 45,
        "escolaridade": "Ensino médio completo",
        "anosExperiencia": 20,
        "fumante": true
    },
    {
        "numero": 3,
        "nome": "João",
        "idade": 65,
        "escolaridade": "7° série",
        "anosExperiencia": 50,
        "fumante": false
    },
    {
        "numero": 4,
        "nome": "Sebastião",
        "idade": 75,
        "escolaridade": "4° série",
        "anosExperiencia": 61,
        "fumante": true
    },
    {
        "numero": 5,
        "nome": "Agustin",
        "idade": 50,
        "escolaridade": "8° série",
        "anosExperiencia": 30,
        "fumante": true
    },
    {
        "numero": 6,
        "nome": "Isabella",
        "idade": 25,
        "escolaridade": "Ensino Superior",
        "anosExperiencia": 1,
        "fumante": false
    },
    {
        "numero": 7,
        "nome": "Genivaldo",
        "idade": 52,
        "escolaridade": "Ensino médio incompleto",
        "anosExperiencia": 35,
        "fumante": false
    },
    {
        "numero": 8,
        "nome": "Rodrigo",
        "idade": 30,
        "escolaridade": "Ensino Superior",
        "anosExperiencia": 8,
        "fumante": true
    }
]


for (let i = 0; i < listaDadosCandidatos.length; i = i + 1) {
    const candidato = listaDadosCandidatos[i]
    selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
}

function preencherDadosCandidato() {
    const numeroCandidatoSelecionado = Number(selectCandidato.value)
    const listaFiltrada = listaDadosCandidatos.filter((candidato) => candidato.numero === numeroCandidatoSelecionado)

    const [candidatoFiltrado] = listaFiltrada

    inputNome.value = candidatoFiltrado.nome
    inputIdade.value = candidatoFiltrado.idade
    inputEscolaridade.value = candidatoFiltrado.escolaridade
    inputAnosExperiencia.value = candidatoFiltrado.anosExperiencia
    inputFumante.checked = candidatoFiltrado.fumante
}
