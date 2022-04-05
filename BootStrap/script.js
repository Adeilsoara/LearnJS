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
    telefone: valorInput.replace(/[^\d]/g,"").replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3")
  };

  if (valorInput.length === tamanhoInput) {
    document.getElementById('telefoneInput').value = mascara[mascaraInput]
  } /* else{
    document.getElementById('telefoneInput').value = valorSemPonto
  } */
}

function mascaraCpf(mascaraInput) {
  const tamanhoInput = document.getElementById('cpfInput').maxLength
  let valorInput = document.getElementById('cpfInput').value
  console.log('tamanho máximo:', tamanhoInput, 'valor input:', valorInput)
  //let valorSemPonto = document.getElementById('telefoneInput').value.replace(/([^0-9]+)/g, "")
  const mascara = {
    cpf: valorInput.replace(/[^\d]/g,"").replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, "$1.$2.$3-$4")
  };

  if (valorInput.length === tamanhoInput) {
    document.getElementById('cpfInput').value = mascara[mascaraInput]
  } 
}

function mascaraCep(mascaraInput) {
  const tamanhoInput = document.getElementById('cepInput').maxLength
  let valorInput = document.getElementById('cepInput').value

  const mascara = {
    cep : valorInput.replace(/[^\d]/g, "").replace(/^(\d{5})(\d{3}).*/, "$1-$2")
  }

  if (valorInput.length === tamanhoInput) {
    document.getElementById('cepInput').value = mascara[mascaraInput]
  }
}