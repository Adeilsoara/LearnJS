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