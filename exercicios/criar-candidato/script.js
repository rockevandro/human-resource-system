const candidatos = JSON.parse(localStorage.getItem("candidatos")) ?? []

function enviarFormulario(e) {
    e.preventDefault()

    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    const nivelEscolaridade = document.getElementById("escolaridade").value
    const anosExperiencia = document.getElementById("anosExperiencia").value
    const fumante = document.getElementById("fumante").checked
    
    const candidato = {
        id: candidatos.length + 1,
        nome: nome,
        idade: idade,
        nivelEscolaridade: nivelEscolaridade,
        anosExperiencia: anosExperiencia,
        fumante: fumante
    }

    candidatos.push(candidato)

    localStorage.setItem("candidatos", JSON.stringify(candidatos))
}