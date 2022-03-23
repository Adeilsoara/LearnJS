function imc() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let calculoIMC = (peso/ (Math.pow(altura,2))).toFixed(2)
    
    //let faixasDePeso = ['Magreza', 'Saudável', 'Sobrepeso', 'Obesidade Grau I']
    if (calculoIMC < 18.5) {
        document.getElementById('thFaixa').innerHTML = 'Magreza'
    } else if(calculoIMC >= 18.5 && calculoIMC < 24.9){
        document.getElementById('thFaixa').innerHTML = 'Saudável'
    } else if(calculoIMC >= 25 && calculoIMC < 29.9){
        document.getElementById('resultado').innerText = `O seu IMC é de: ${calculoIMC} e sua faixa é: Sobrepeso`
    } else if(calculoIMC >= 30 && calculoIMC < 34.9){
        document.getElementById('resultado').innerText = `O seu IMC é de: ${calculoIMC} e sua faixa é: Obesidade Grau I`
    } else if(calculoIMC >= 35 && calculoIMC < 39.9){
        document.getElementById('resultado').innerText = `O seu IMC é de: ${calculoIMC} e sua faixa é: Obesidade Grau II`
    }else{
        document.getElementById('resultado').innerText = `O seu IMC é de: ${calculoIMC} e sua faixa é: Obesidade Mórbida`
    }

    document.getElementById('thPeso').innerHTML = peso
    document.getElementById('thAltura').innerHTML = altura
    document.getElementById('thImc').innerHTML = calculoIMC
    
  }
          

