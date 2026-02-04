function trocaPaginas() {

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('inpSenha').value;
    var mensagem = document.getElementById('pMensagem');

   //se a dropdownlist não estiver selecionada
    if (usuario === "0") {
        mensagem.innerHTML = "Selecione o tipo de usuário!";
    }

    // Usuário comum
    else if (usuario === "1" && senha === "123") {
        alert("Você será direcionado para a página de conta cliente.");
        window.location.href = "contaBancaria.html";
    }

    // Conta salário
    else if (usuario === "2" && senha === "456") {
        alert("Você será direcionado para a página de conta salário.");
        window.location.href = "contaSalario.html";
    }

    // Aposentado
    else if (usuario === "3" && senha === "789") {
        alert("Você será direcionado para a página de benefício aposentadoria.");
        window.location.href = "aposentado.html";
    }

    // Erro
    else {
        mensagem.innerHTML = "Usuário ou senha inválidos!";
    }
}
