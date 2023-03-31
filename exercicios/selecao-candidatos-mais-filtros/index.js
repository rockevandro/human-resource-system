const selectCandidato = document.getElementById("selectCandidato")

const inputNome = document.getElementById("nome")
const inputIdade = document.getElementById("idade")
const inputEscolaridade = document.getElementById("escolaridade")
const inputAnosExperiencia = document.getElementById("anosExperiencia")
const inputFumante = document.getElementById("fumante")
const selectFiltrosEnsino = document.getElementById("ensino")
selectFiltrosEnsino.insertAdjacentHTML("beforeend", `<option value='Ensino Fundamental'>Ensino Fundamental</option>`)
selectFiltrosEnsino.insertAdjacentHTML("beforeend", `<option value='Ensino Médio'>Ensino Médio</option>`)
selectFiltrosEnsino.insertAdjacentHTML("beforeend", `<option value='Ensino Técnico'>Ensino Técnico</option>`)
selectFiltrosEnsino.insertAdjacentHTML("beforeend", `<option value='Ensino Superior'>Ensino Superior</option>`)
const checkbox = document.getElementById("eFumante")


const listaDadosCandidatos = [
    {
        "numero": 1,
        "nome": "Joaquim da Silva",
        "idade": 75,
        "escolaridade": "Ensino Fundamental Incompleto",
        "anosExperiencia": 60,
        "fumante": true
    },
    {
        "numero": 2,
        "nome": "Ana",
        "idade": 45,
        "escolaridade": "Ensino Técnico Completo",
        "anosExperiencia": 20,
        "fumante": true
    },
    {
        "numero": 3,
        "nome": "João",
        "idade": 65,
        "escolaridade": "Ensino Fundamental Incompleto",
        "anosExperiencia": 50,
        "fumante": false
    },
    {
        "numero": 4,
        "nome": "Sebastião",
        "idade": 75,
        "escolaridade": "Ensino Fundamental Incompleto",
        "anosExperiencia": 61,
        "fumante": true
    },
    {
        "numero": 5,
        "nome": "Agustin",
        "idade": 50,
        "escolaridade": "Ensino Fundamental Completo",
        "anosExperiencia": 30,
        "fumante": true
    },
    {
        "numero": 6,
        "nome": "Isabella",
        "idade": 25,
        "escolaridade": "Ensino Superior Incompleto",
        "anosExperiencia": 1,
        "fumante": false
    },
    {
        "numero": 7,
        "nome": "Genivaldo",
        "idade": 52,
        "escolaridade": "Ensino Médio Incompleto",
        "anosExperiencia": 35,
        "fumante": false
    },
    {
        "numero": 8,
        "nome": "Rodrigo",
        "idade": 30,
        "escolaridade": "Ensino Técnico Incompleto",
        "anosExperiencia": 8,
        "fumante": true
    },
    {
        "numero": 9,
        "nome": "Monize",
        "idade": 21,
        "escolaridade": "Ensino Superior Completo",
        "anosExperiencia": 4,
        "fumante": false
    },
    {
        "numero": 10,
        "nome": "Venício",
        "idade": 24,
        "escolaridade": "Ensino Superior Completo",
        "anosExperiencia": 6,
        "fumante": false
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

function filtrarCandidatos() {
selectCandidato.innerHTML = ""
const valorInput = selectFiltrosEnsino.value

listaDadosCandidatos.filter((candidato) => {
    if (candidato.escolaridade === `${valorInput} Completo` || candidato.escolaridade === `${valorInput} Incompleto`) {
    selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
    }
}
    )
  }

  function filtroFumante(){
    selectCandidato.innerHTML = ""
    const eFumante = checkbox.checked
    listaDadosCandidatos.filter((candidato) => {
       if(candidato.fumante == eFumante) {
         selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
        }}
    )
  }