/* var nota1 = 8
var nota2 = 6
var nota3 = 5 */

/* AULA 01 - VARIÁVEIS E FUNÇÕES */

//console.log(media.toFixed(2))
//document.write('A média é: ' + media.toFixed(2))
/* var a = Number(prompt('1ª nota: '))
var b = Number(prompt('2ª Nota: '))
var c = Number(prompt('3ª Nota: '))

var media = (nota1 + nota2 + nota3)/3

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3)/3
}

document.write('A média é: ' + calcularMedia(a, b, c).toFixed(2)) */

/* EXERCÍCIOS 
DESENVOLVA UM SCRIPT QUE FAÇA AS 4 OPERAÇÕES MATÉMÁTICAS (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)
NA DIVISÃO GARANTA QUE O ARRENDAMENTO SEJA COM NO MÁXIMO DUAS CASAS DECIMAIS.
O SCRIPT DEVE SOLICITAR QUE O USUÁRIO INFORME OS VALORES.
*/

/* let a = Number(prompt('Digite o 1ª valor: '))
let b = Number(prompt('Digite o 2ª valor: ')) */

/* let soma = a + b
document.write('Soma: ', soma + '<br>')
let subtracao = a - b
document.write('Subtração: ', subtracao + '<br>')
let mult = a * b
document.write('Multiplicação: ', mult  + '<br>')
let divisao = (a/b).toFixed(2)
document.write('Divisão: ', divisao) */

/* function somar() {
    return document.write('Soma: ', (a + b) +'<br>')
}

function subtrair() {
    return document.write('Subtração: ', (a - b) +'<br>')
}

function multplicar() {
    return document.write('Multiplicação: ', (a * b) + '<br>')
}

function dividir() {
    return document.write('Divisão: ', (a/b).toFixed(2))
}

somar()
subtrair()
multplicar()
dividir() */

/*  Faça um script para saber a idade de uma pessoa, através do ano atual e ano de
nascimento, na pagina em HTML deve ser mostrado o nome de uma pessoa e sua
idade. */
/* 
let anoAtual = Number(prompt('Informe o ano atual: '))
let anoDeNascimento = Number(prompt('Informe o ano em que você nasceu: '))

 let idade = anoAtual - anoDeNascimento
document.write('Sua idade é: ', idade + ' anos') 

function calcularIdade() {
    return document.write('Sua idade é: ',anoAtual - anoDeNascimento + ' anos')
}
calcularIdade() */

/*  Elabore um script para mostrar o consumo médio de um automóvel. */

/* let quilometragem = Number(prompt('Quantos quilômetros você rodou? '))
let litroCombustivel = Number(prompt('Quantos litros abastaceu? '))

let consumoMedio = (quilometragem/litroCombustivel).toFixed(2)
document.write('O consumo médio do seu veículo foi: ', consumoMedio + 'Km/L')

 */

function consumoMedio(km, litros) {
    return (km/litros).toFixed(2)
}


let quilometragem = Number(prompt('Quantos quilômetros você rodou? '))
let litroCombustivel = Number(prompt('Quantos litros abastaceu? ')) 

/* let consumoMedio = (km, litros) =>{
    return (km/litros).toFixed(2)
} */

document.write('O consumo médio foi de: ', consumoMedio(quilometragem, litroCombustivel))

