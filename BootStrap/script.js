function pegarIdade(dataNascimento) {
  const dataAtual = new Date()
  let diferenca = dataAtual.getFullYear() - dataNascimento.getFullYear()

  if (
    new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate()) < 
    new Date(dataAtual.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate())
    )
    diferenca--
   
  return diferenca
}

const campoDataNascimento = document.getElementById('dataNascimento')
const campoIdade = document.getElementById('idade')

campoDataNascimento.addEventListener('change', (e) => {
  const data = new Date(e.target.value)

  campoIdade.value = pegarIdade(data)
})

function mascaraTel(mascaraInput) {
  const tamanhoInput = document.getElementById(`${mascaraInput}Input`).maxLength
  let valorInput = document.getElementById(`${mascaraInput}Input`).value
  console.log('tamanho máximo:', tamanhoInput, 'valor input:', valorInput)
}