const resultadoEl = document.getElementById('resultado')
const copiaEl = document.getElementById('copiar')

//Função que utiliza random para gerar a senha a partir da combinação de 
//números e caracteres minúsculos como também com caracteres maiúsculos
function gerarSenha() {
    resultadoEl.innerText = Math.random().toString(36).slice(2) +
    Math.random().toString(36).toUpperCase().slice(2)
}

resultadoEl.addEventListener('click', gerarSenha)

//Função para copiar senha e gerar um alerta quando o texto for copiado

copiaEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const senha = resultadoEl.innerText
 
    textArea.value = senha 
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert('Senha copiada!')
  })