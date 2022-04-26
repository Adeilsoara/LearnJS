const resultadoEl = document.getElementById('resultado')

function gerarSenha() {
    resultadoEl.innerText = Math.random().toString(36).slice(2) +
    Math.random().toString(36).toUpperCase().slice(2)
}

document.addEventListener('click', gerarSenha)

/* function copiarSenha() {
    let copyText = document.querySelector('#resultado');
    copyText.select();
    document.execCommand("copy");
}

document.querySelector('#copiar').addEventListener("click", copiarSenha) */

