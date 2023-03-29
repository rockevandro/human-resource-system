const selectCandidato = document.getElementById("selectCandidato")
const selectEscolaridade = document.getElementById("selectEscolaridade")

const inputNome = document.getElementById("nome")
const inputIdade = document.getElementById("idade")
const inputEscolaridade = document.getElementById("escolaridade")
const inputAnosExperiencia = document.getElementById("anosExperiencia")
const inputFumante = document.getElementById("fumante")

const listaEscolaridades = [
    {
        "numero": 1,
        "titulo": "Ensino Fundamental"
    },
    {
        "numero": 2,
        "titulo": "Ensino Médio"
    },
    {
        "numero": 3,
        "titulo": "Ensino Técnico"
    },
    {
        "numero": 4,
        "titulo": "Ensino Superior"
    }
]

let listaDadosCandidatos = [
    {
        "numero": 1,
        "nome": "Joaquim da Silva",
        "idade": 75,
        "escolaridade": 1,
        "anosExperiencia": 60,
        "fumante": true
    },
    {
        "numero": 2,
        "nome": "Ana",
        "idade": 45,
        "escolaridade": 2,
        "anosExperiencia": 20,
        "fumante": true
    },
    {
        "numero": 3,
        "nome": "João",
        "idade": 65,
        "escolaridade": 1,
        "anosExperiencia": 50,
        "fumante": false
    },
    {
        "numero": 4,
        "nome": "Sebastião",
        "idade": 75,
        "escolaridade": 1,
        "anosExperiencia": 61,
        "fumante": true
    },
    {
        "numero": 5,
        "nome": "Agustin",
        "idade": 50,
        "escolaridade": 1,
        "anosExperiencia": 30,
        "fumante": true
    },
    {
        "numero": 6,
        "nome": "Isabella",
        "idade": 25,
        "escolaridade": 4,
        "anosExperiencia": 1,
        "fumante": false
    },
    {
        "numero": 7,
        "nome": "Genivaldo",
        "idade": 52,
        "escolaridade": 2,
        "anosExperiencia": 35,
        "fumante": false
    },
    {
        "numero": 8,
        "nome": "Rodrigo",
        "idade": 30,
        "escolaridade": 4,
        "anosExperiencia": 8,
        "fumante": true
    },
    {
        "numero": 9,
        "nome": "Jacinto",
        "idade": 32,
        "escolaridade": 3,
        "anosExperiencia": 5,
        "fumante": true
    }
]

preencheSelectCandidatos(listaDadosCandidatos)

for (let i = 0; i < listaEscolaridades.length; i = i + 1) {
    const escolaridade = listaEscolaridades[i]
    selectEscolaridade.insertAdjacentHTML("beforeend", `<option value='${escolaridade.numero}'>${escolaridade.titulo}</option>`)
}

function preencherDadosCandidato() {
    const numeroCandidatoSelecionado = Number(selectCandidato.value)
    const listaFiltrada = listaDadosCandidatos.filter((candidato) => candidato.numero === numeroCandidatoSelecionado)

    const [candidatoFiltrado] = listaFiltrada

    inputNome.value = candidatoFiltrado.nome
    inputIdade.value = candidatoFiltrado.idade

    const escolaridadeFiltrada = listaEscolaridades
        .filter((escolaridade) => 
            escolaridade.numero === candidatoFiltrado.escolaridade)[0]

    inputEscolaridade.value = escolaridadeFiltrada.titulo

    inputAnosExperiencia.value = candidatoFiltrado.anosExperiencia
    inputFumante.checked = candidatoFiltrado.fumante
}

const filtrarCandidatosPelaEscolaridade = () => {

    const numeroEscolaridadeSelecionada = Number(selectEscolaridade.value)
    if (numeroEscolaridadeSelecionada === 0) {
        preencheSelectCandidatos(listaDadosCandidatos)
        return
    }

    const listaFiltrada = listaDadosCandidatos.filter((candidato) => candidato.escolaridade === numeroEscolaridadeSelecionada)
    
    preencheSelectCandidatos(listaFiltrada)
}

function preencheSelectCandidatos(listaDosCandidatos) {
    selectCandidato.innerHTML = ""
    for (let i = 0; i < listaDosCandidatos.length; i = i + 1) {
        const candidato = listaDosCandidatos[i]
        selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
    }
}