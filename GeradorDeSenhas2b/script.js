const resultadoEl = document.getElementById('resultado')
const copiaEl = document.getElementById('copiar')

function gerarSenha() {
    resultadoEl.innerText = Math.random().toString(36).slice(2) + 
    Math.random().toString(36).toUpperCase().slice(2)
}

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