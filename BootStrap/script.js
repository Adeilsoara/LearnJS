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
  const tamanhoInput = document.getElementById('telefoneInput').maxLength
  let valorInput = document.getElementById('telefoneInput').value
  //console.log('tamanho máximo:', tamanhoInput, 'valor input:', valorInput)
  //let valorSemPonto = document.getElementById('telefoneInput').value.replace(/([^0-9]+)/g, "")
  const mascara = {
    telefone: valorInput.replace(/[^\d]/g,"").replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3")
  };

  if (valorInput.length === tamanhoInput) {
    document.getElementById('telefoneInput').value = mascara[mascaraInput]
  } /* else{
    document.getElementById('telefoneInput').value = valorSemPonto
  } */
}