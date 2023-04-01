const selectCandidato = document.getElementById("selectCandidato");
const selectNivelEscolaridade = document.getElementById("nivelEscolaridade");
const selectFumanteOuNao = document.getElementById("fumanteOuNao");

const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const inputEscolaridade = document.getElementById("escolaridade");
const inputAnosExperiencia = document.getElementById("anosExperiencia");
const inputFumante = document.getElementById("fumante");

const arrayEscolaridade = [
  "Ensino Médio Completo",
  "Ensino Médio Incompleto",
  "Ensino Fundamental Completo",
  "Ensino Fundamental Incompleto",
  "Ensino Superior Completo",
  "Ensino Superior Incompleto",
  "Pós Graduação",
];

const listaDadosCandidatos = [
  {
    numero: 1,
    nome: "Joaquim da Silva",
    idade: 75,
    escolaridade: "Ensino Fundamental Incompleto",
    anosExperiencia: 60,
    fumante: true,
  },
  {
    numero: 2,
    nome: "Ana",
    idade: 45,
    escolaridade: "Ensino Médio Completo",
    anosExperiencia: 20,
    fumante: true,
  },
  {
    numero: 3,
    nome: "João",
    idade: 65,
    escolaridade: "Ensino Médio Completo",
    anosExperiencia: 50,
    fumante: false,
  },
  {
    numero: 4,
    nome: "Sebastião",
    idade: 75,
    escolaridade: "Ensino Fundamental Incompleto",
    anosExperiencia: 61,
    fumante: true,
  },
  {
    numero: 5,
    nome: "Agustin",
    idade: 50,
    escolaridade: "Ensino Fundamental Completo",
    anosExperiencia: 30,
    fumante: true,
  },
  {
    numero: 6,
    nome: "Isabella",
    idade: 25,
    escolaridade: "Ensino Superior Completo",
    anosExperiencia: 1,
    fumante: false,
  },
  {
    numero: 7,
    nome: "Genivaldo",
    idade: 52,
    escolaridade: "Ensino Médio Incompleto",
    anosExperiencia: 35,
    fumante: false,
  },
  {
    numero: 8,
    nome: "Rodrigo",
    idade: 30,
    escolaridade: "Ensino Superior Incompleto",
    anosExperiencia: 8,
    fumante: true,
  },
];

for (let i = 0; i < listaDadosCandidatos.length; i = i + 1) {
  const candidato = listaDadosCandidatos[i];
  selectCandidato.insertAdjacentHTML(
    "beforeend",
    `<option value='${candidato.numero}'>${candidato.nome}</option>`
  );
}

function preencherDadosCandidato() {
  const numeroCandidatoSelecionado = Number(selectCandidato.value);
  const listaFiltrada = listaDadosCandidatos.filter(
    (candidato) => candidato.numero === numeroCandidatoSelecionado
  );

  const [candidatoFiltrado] = listaFiltrada;

  inputNome.value = candidatoFiltrado.nome;
  inputIdade.value = candidatoFiltrado.idade;
  inputEscolaridade.value = candidatoFiltrado.escolaridade;
  inputAnosExperiencia.value = candidatoFiltrado.anosExperiencia;
  inputFumante.checked = candidatoFiltrado.fumante;
}
for (let i = 0; i < arrayEscolaridade.length; i++) {
  const escolaridade = arrayEscolaridade[i];
  selectNivelEscolaridade.insertAdjacentHTML(
    "beforeend",
    `<option value = '${escolaridade}'>${escolaridade}</option>`
  );
}

function filtrarListaDeCandidatos() {
  const escolaridadeSelecionada = selectNivelEscolaridade.value;
  let listaFiltrada = [];
  if (Number(escolaridadeSelecionada) != 0) {
    listaFiltrada = listaDadosCandidatos.filter(
      (candidato) => candidato.escolaridade === escolaridadeSelecionada
    );
  } else {
    listaFiltrada = listaDadosCandidatos;
  }
  selectCandidato.innerHTML = "";

  for (let i = 0; i < listaFiltrada.length; i = i + 1) {
    const candidato = listaFiltrada[i];
    selectCandidato.insertAdjacentHTML(
      "beforeend",
      `<option value='${candidato.numero}'>${candidato.nome}</option>`
    );
  }
}

function filtrarFumanteOuNaoFumante() {
  const fumanteOuNaoSelecionada = selectFumanteOuNao.value;
  let listaFiltrada = [];
  selectCandidato.innerHTML = "";
  if (fumanteOuNaoSelecionada != 0) {
    listaFiltrada = listaDadosCandidatos.filter(
      (candidato) => candidato.fumante.toString() === fumanteOuNaoSelecionada
    );
  } else {
    listaFiltrada = listaDadosCandidatos;
  }
  for (let i = 0; i < listaFiltrada.length; i++) {
    const candidato = listaFiltrada[i];
    selectCandidato.insertAdjacentHTML(
      "beforeend",
      `<option value='${candidato.numero}'>${candidato.nome}</option>`
    );
  }
}
