const selectCandidato = document.getElementById("selectCandidato")

const inputNome = document.getElementById("nome")
const inputIdade = document.getElementById("idade")
const inputEscolaridade = document.getElementById("escolaridade")
const inputAnosExperiencia = document.getElementById("anosExperiencia")
const inputFumante = document.getElementById("fumante")
const checkbox = document.getElementById("eFumante")
const inputPesquisarNome = document.getElementById("filtroNome")
const inputMorada = document.getElementById("morada")
const checkboxAnadia = document.getElementById("Anadia")

const listaDadosCandidatos = [
    {
        "numero": 1,
        "nome": "Joaquim da Silva",
        "idade": 65,
        "escolaridade": "4° série",
        "anosExperiencia": 45,
        "morada": "Oiã",
        "fumante": true
    },
    {
        "numero": 2,
        "nome": "Ana",
        "idade": 45,
        "escolaridade": "Ensino médio completo",
        "anosExperiencia": 20,
        "morada": "Anadia",
        "fumante": true
    },
    {
        "numero": 3,
        "nome": "João",
        "idade": 65,
        "escolaridade": "7° série",
        "anosExperiencia": 45,
        "morada": "Agueda",
        "fumante": false
    },
    {
        "numero": 4,
        "nome": "Sebastião",
        "idade": 65,
        "escolaridade": "4° série",
        "anosExperiencia": 22,
        "morada": "Oiã",
        "fumante": true
    },
    {
        "numero": 5,
        "nome": "Agustin",
        "idade": 50,
        "escolaridade": "8° série",
        "anosExperiencia": 30,
        "morada": "Anadia",
        "fumante": true
    },
    {
        "numero": 6,
        "nome": "Isabella",
        "idade": 25,
        "escolaridade": "Ensino Superior",
        "anosExperiencia": 1,
        "morada": "Agueda",
        "fumante": false
    },
    {
        "numero": 7,
        "nome": "Genivaldo",
        "idade": 52,
        "escolaridade": "Ensino médio incompleto",
        "anosExperiencia": 35,
        "morada": "Oiã",
        "fumante": false
    },
    {
        "numero": 8,
        "nome": "Rodrigo",
        "idade": 30,
        "escolaridade": "Ensino Superior",
        "anosExperiencia": 8,
        "morada": "Oliveira do Bairro",
        "fumante": true
    },
    {
        "numero": 9,
        "nome": "Monize",
        "idade": 21,
        "escolaridade": "Ensino Superior Completo",
        "anosExperiencia": 4,
        "morada": "Oliveira do Bairro",
        "fumante": false
    },
    {
        "numero": 10,
        "nome": "Venício",
        "idade": 24,
        "escolaridade": "Ensino Superior Completo",
        "anosExperiencia": 6,
        "morada": "Oliveira do Bairro",
        "fumante": false
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
    inputMorada.value = candidatoFiltrado.morada
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
function atualizarOutputEX(){
    const rangeExperiencia = document.getElementById("rangeExperiencia").value
    document.getElementById("outputValueEXP").textContent = rangeExperiencia

    filtrarCandidatosPelaExperiencia(rangeExperiencia)
}

const filtrarCandidatosPelaExperiencia = valorDoRangeEXP => {
    const listaFiltrada = listaDadosCandidatos.filter(candidato => candidato.anosExperiencia <= valorDoRangeEXP)
    selectCandidato.innerHTML = ""

    for (let i = 0; i < listaFiltrada.length; i = i + 1) {
        const candidato = listaFiltrada[i]
        selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
    }
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

  function filtrarPesquisa() {
    const caixaDigitarNome = inputPesquisarNome.value
    let caixa = caixaDigitarNome.toLowerCase()
    const listaFiltrada = listaDadosCandidatos.filter(candidato => candidato.nome.toLowerCase().startsWith(caixa))
    selectCandidato.innerHTML = ""

    for (let i = 0; i < listaFiltrada.length; i = i + 1) {
        const candidato = listaFiltrada[i]
        selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
    }
}
function filtroMoradaAnadia() {
    selectCandidato.innerHTML = ""
    listaDadosCandidatos.filter((candidato) => {
       if(candidato.morada == "Anadia") {
         selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
        }}
    )
  }
  function filtroMoradaOia() {
    selectCandidato.innerHTML = ""
    listaDadosCandidatos.filter((candidato) => {
       if(candidato.morada == "Oiã") {
         selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
        }}
    )
  }
  function filtroMoradaAgueda() {
    selectCandidato.innerHTML = ""
    listaDadosCandidatos.filter((candidato) => {
       if(candidato.morada == "Agueda") {
         selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
        }}
    )
  }
  function filtroMoradaOliveira() {
    selectCandidato.innerHTML = ""
    listaDadosCandidatos.filter((candidato) => {
       if(candidato.morada == "Oliveira do Bairro") {
         selectCandidato.insertAdjacentHTML("beforeend", `<option value='${candidato.numero}'>${candidato.nome}</option>`)
        }}
    )
  }
