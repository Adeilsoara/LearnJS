/* function retornaValores(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro)
    }else{
        alert("CEP não encontrado")
    }
}

function buscaCep(valor) {
    var cep = valor.replace(/\D/g, '')

    if (cep != "") {
        var validarCEP = /^[0-9]{8}$/
        if (validarCEP.test(cep)) {
            document.getElementById('rua').value="..."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornaValores`
            document.body.appendChild(script)
        }else{
            alert("Formato inválido")
        }
    }
} */


$("#cep").blur(function (e){
    let cep = this.value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            response.json()
                .then(data => mostrarDados(data))
        })
    
    const mostrarDados = (result) =>{
        for(const campo in result){
            /* console.log(campo) */
            if (document.querySelector("#"+campo)) {
                document.querySelector("#"+campo).value = result[campo]
            }
        }
    }
})