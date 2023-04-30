const selectVagas = document.getElementById("vagasAbertas")
const inputCargo = document.getElementById("cargo")
const inputSalario = document.getElementById("salario")
const inputEmpresa = document.getElementById("empresa")
const inputEscolaridade = document.getElementById("escolaridade")
const inputExperiencia = document.getElementById("experiencia")
const inputHorario = document.getElementById("horarios")
const inputLocalidade = document.getElementById("localidade")



const listaVagasDeEmprego = [
    {
        numero: 1,
        cargo: "Operador de Telemarketing",
        empresa: "Bolzan Telecomunicações",
        localidade: "Oiã",
        horarios: "2ª a 6ª feira",
        anosExperiencia: 2,
        escolaridade: "Ensino Médio",
        salario: 820
    },
    {
        numero: 2,
        cargo: "Analista de Sistemas",
        empresa: "JutaTECH",
        localidade: "Oliveira do Bairro",
        horarios: "2ª a 6ª feira",
        anosExperiencia: 5,
        escolaridade: "Ensino Superior",
        salario: 1250
    },
    {
        numero: 3,
        cargo: "Programador JavaScript Junior",
        empresa: "JutaTECH",
        localidade: "Oliveira do Bairro",
        horarios: "2ª a 6ª feira",
        anosExperiencia: 1,
        escolaridade: "Ensino Superior",
        salario: 1800
    },
    {
        numero: 4,
        cargo: "Designer UX",
        empresa: "UPIX",
        localidade: "Agueda",
        horarios: "2ª a 6ª feira",
        anosExperiencia: 2,
        escolaridade: "Ensino Superior",
        salario: 2200
    },
    {
        numero: 5,
        cargo: "Tecnico de Informatica",
        empresa: "Bolzan Telecomunicações",
        localidade: "Oiã",
        horarios: "2ª a 6ª feira",
        anosExperiencia: 4,
        escolaridade: "Ensino Superior",
        salario: 930
    },
    {
        numero: 6,
        cargo: "Segurança",
        empresa: "SEGUR",
        localidade: "Anadia",
        horarios: "turnos",
        anosExperiencia: 10,
        escolaridade: "Ensino Médio",
        salario: 1200
    },   
    {
        numero: 7,
        cargo: "Analista de Suporte",
        empresa: "Bolzan Telecomunicações",
        localidade: "Oiã",
        horarios: "turnos",
        anosExperiencia: 5,
        escolaridade: "Ensino Superior",
        salario: 1050
    },
    {
        numero: 8,
        cargo: "Motorista",
        empresa: "SEGUR",
        localidade: "Anadia",
        horarios: "turnos",
        anosExperiencia: 10,
        escolaridade: "Ensino Fundamental",
        salario: 950
    },
    {
        numero: 9,
        cargo: "Analista em Departamento Pessoal",
        empresa: "UPIX",
        localidade: "Agueda",
        horarios: "2ª a 6ª feira",
        anosExperiencia: 8,
        escolaridade: "Ensino Técnico",
        salario: 1300
    },
]

for(let i = 0; i < listaVagasDeEmprego.length; i++){
    const vagasEmprego = listaVagasDeEmprego[i]
    selectVagas.insertAdjacentHTML("beforeend", `<option value='${vagasEmprego.numero}'>${vagasEmprego.cargo}</option>`)
}

function preencherDadosVagas() {
    const numeroCargoSelecionado = Number(selectVagas.value)
    const listaFiltrada = listaVagasDeEmprego
        .filter((vagasEmprego) => vagasEmprego.numero === numeroCargoSelecionado)

    const [cargoFiltrado] = listaFiltrada

    inputCargo.value = cargoFiltrado.cargo
    inputSalario.value = cargoFiltrado.salario
    inputEmpresa.value = cargoFiltrado.empresa
    inputEscolaridade.value = cargoFiltrado.escolaridade
    inputExperiencia.value = cargoFiltrado.anosExperiencia
    inputHorario.value = cargoFiltrado.horarios
    inputLocalidade.value = cargoFiltrado.localidade
}
function filtroLocalidadeOliveira() {
    selectVagas.innerHTML = ""
    listaVagasDeEmprego.filter((vagas) => {
       if(vagas.localidade == "Oliveira do Bairro") {
         selectVagas.insertAdjacentHTML("beforeend", `<option value='${vagas.numero}'>${vagas.cargo}</option>`)
        }}
    )
  }
  function filtroLocalidadeOia() {
    selectVagas.innerHTML = ""
    listaVagasDeEmprego.filter((vagas) => {
       if(vagas.localidade == "Oiã") {
         selectVagas.insertAdjacentHTML("beforeend", `<option value='${vagas.numero}'>${vagas.cargo}</option>`)
        }}
    )
  }
  function filtroLocalidadeAnadia() {
    selectVagas.innerHTML = ""
    listaVagasDeEmprego.filter((vagas) => {
       if(vagas.localidade == "Anadia") {
         selectVagas.insertAdjacentHTML("beforeend", `<option value='${vagas.numero}'>${vagas.cargo}</option>`)
        }}
    )
  }
  function filtroLocalidadeAgueda() {
    selectVagas.innerHTML = ""
    listaVagasDeEmprego.filter((vagas) => {
       if(vagas.localidade == "Agueda") {
         selectVagas.insertAdjacentHTML("beforeend", `<option value='${vagas.numero}'>${vagas.cargo}</option>`)
        }}
    )
  }

  function atualizaOutputSalario(){
    const rangeSalario = document.getElementById("rangeSalario").value
    document.getElementById("output-value").textContent = rangeSalario

    filtrarPeloSalario(rangeSalario)
}
const filtrarPeloSalario = valorDoRangeSalario => {
    const listaFiltrada = listaVagasDeEmprego.filter((vagasEmprego) => vagasEmprego.salario <= valorDoRangeSalario)
    selectVagas.innerHTML = ""

    for(let i = 0; i < listaFiltrada.length; i++){
        const vagasEmprego = listaFiltrada[i]
        selectVagas.insertAdjacentHTML("beforeend", `<option value='${vagasEmprego.numero}'>${vagasEmprego.cargo}</option>`)
}}

function sairDaPagina() {
    window.location.href = "http://127.0.0.1:5500/pagina-de-login/pagina-inicial.html"
}