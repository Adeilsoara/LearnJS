const resultadoEl = document.getElementById('resultado')
const copiaEl = document.getElementById('copiar')

function gerarSenha() {
    resultadoEl.innerText = Math.random().toString(36).slice(2) + 
    Math.random().toString(36).toUpperCase().slice(2)
}

/* document.getElementById('copiar').addEventListener('click', function () {
    var texto = document.getElementById('resultado').innerText;
  
    function listener(e) {
      e.clipboardData.setData('text/plain', texto);
      e.preventDefault();
    }
  
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  });
 */

  /* Função para copiar os caracteres gerados no campo resultado */
  copiaEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const senha = resultadoEl.innerText

    /* if(!senha) { return } */

    textArea.value = senha
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert('Senha copiada!')
})