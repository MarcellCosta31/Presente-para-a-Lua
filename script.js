function validarLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    
    const usuarioCorreto = "Lua";
    const senhaCorreta = "030225";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        window.location.href = "pagina_inicial/index.html";
    } else {
        mensagem.textContent = "Usuário ou senha incorretos!";
    }
}