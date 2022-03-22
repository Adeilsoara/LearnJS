function imc() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let calculoIMC = (peso/ (Math.pow(altura,2))).toFixed(2)
    
    document.getElementById('resultado').innerText = `O seu IMC é de: ${calculoIMC}`
}

