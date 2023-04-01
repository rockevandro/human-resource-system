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
        "idade": 65,
        "escolaridade": "4° série",
        "anosExperiencia": 50,
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
        "idade": 65,
        "escolaridade": "4° série",
        "anosExperiencia": 49,
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
    const listaFiltrada = listaDadosCandidatos
        .filter((candidato) => candidato.numero === numeroCandidatoSelecionado)

    const [candidatoFiltrado] = listaFiltrada

    inputNome.value = candidatoFiltrado.nome
    inputIdade.value = candidatoFiltrado.idade
    inputEscolaridade.value = candidatoFiltrado.escolaridade
    inputAnosExperiencia.value = candidatoFiltrado.anosExperiencia
    inputFumante.checked = candidatoFiltrado.fumante
}

function atualizarOutput(){
    const rangeIdade = document.getElementById("rangeIdade").value
    document.getElementById("outputValue").textContent = rangeIdade

    filtrarCandidatosPelaIdade(rangeIdade)
}

const filtrarCandidatosPelaIdade = valorDoRangeIdade => {
    const listaFiltrada = listaDadosCandidatos.filter(candidato => candidato.idade <= valorDoRangeIdade)
    selectCandidato.innerHTML = ""

    for (let i = 0; i < listaFiltrada.length; i = i + 1) {
        const candidato = listaFiltrada[i]
        selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
    }
}

function atualizarOutputExperiencia(){
    const rangeExperiencia = document.getElementById("rangeExperiencia").value
    document.getElementById("outputValueExperiencia").textContent = rangeExperiencia

    filtrarCandidatoAnosDeExperiencia(rangeExperiencia)
}

const filtrarCandidatoAnosDeExperiencia = valorRangeExperiencia => {
    const listaFiltrada = listaDadosCandidatos.filter(candidato => candidato.anosExperiencia >= valorRangeExperiencia)
    selectCandidato.innerHTML = ""
    

    for (let i = 0; i < listaFiltrada.length; i = i + 1) {
        const candidato = listaFiltrada[i]
        selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
    }
}

const filtrarCandidatoPorNome = () => {
    const buscaNomeCandidato = document.getElementById("buscaNomeCandidato").value
    const listaFiltrada = listaDadosCandidatos.filter(candidato => candidato.nome.toUpperCase().startsWith(buscaNomeCandidato.toUpperCase()))
    selectCandidato.innerHTML = ""
    

    for (let i = 0; i < listaFiltrada.length; i = i + 1) {
        const candidato = listaFiltrada[i]
        selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
    }
}
