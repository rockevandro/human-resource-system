const usuarios = [
    {   
        nomeDeUsuario: "usuario123",
        email: "usuario123usuario@teste.com",
        senha: "usuario123"
    },
    {
        nomeDeUsuario: "Naroonkz VnS",
        email: "naroonkzvns@teste.com",
        senha: "nrk123nrk"
    },
    {   
        nomeDeUsuario: "Vinnynize",
        email: "vinnynize.araujo@teste.com",
        senha: "venny123"
    },
    {
        nomeDeUsuario: "VnS-BR",
        email: "viniciosaraujo@teste.com",
        senha: "araujo12"
    }
]

function fazerLogin() {
    const nomeUsuario = document.getElementById("usuario").value;
    const senhaUsuario = document.getElementById("senha").value;

   const usuarioLogado =  usuarios.filter((usuario) => nomeUsuario == usuario.nomeDeUsuario && senhaUsuario == usuario.senha);

    if(usuarioLogado.length) { window.location.href = "http://127.0.0.1:5500/selecao-vagas-de-emprego/index.html"
} else {
        alert("Usuário ou senha invalido");
    }

}
