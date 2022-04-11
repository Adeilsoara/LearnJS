function capturarIdade(dataNascimento) {
    const dataAtual = new Date()
    let diferenca = dataAtual.getFullYear() - dataNascimento.getFullYear()

    if (
        new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate()) <
        new Date(dataAtual.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate())
        )
        diferenca --
    return diferenca

}

const campoDataDeNascimento = document.getElementById('dataNascimento')
const campoIdade = document.getElementById('idade')

campoDataDeNascimento.addEventListener('change', (e) => {
    const data = new Date(e.target.value)

    campoIdade.value = capturarIdade(data)
})

/* Mascáras para CEP */
function mascaraCep(mascaraInput) {
    const tamanhoInput = document.getElementById('cepInput').maxLength
    let valorInput = document.getElementById('cepInput').value
    //console.log('tamanho máximo:', tamanhoInput, 'valor input', valorInput)
    const mascara = {
        cep : valorInput.replace(/[^\d]/g, "").replace(/^(\d{5})(\d{3}).*/, '$1-$2' )
    };

    if(valorInput.length == tamanhoInput){
        document.getElementById('cepInput').value = mascara[mascaraInput]
    }
}

/* Mensagens de Alerta */

var mensagemDeAlerta = document.getElementById('mensagem')
var gatilhoDeMensagem = document.getElementById('btnSalvar')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  mensagemDeAlerta.append(wrapper)
}

if (gatilhoDeMensagem) {
  gatilhoDeMensagem.addEventListener('click', function () {
    alert('Informações enviadas com sucesso!', 'success')
  })
}
