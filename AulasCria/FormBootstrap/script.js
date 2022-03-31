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