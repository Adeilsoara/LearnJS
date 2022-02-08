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


/*  Faça um script para saber a idade de uma pessoa, através do ano atual e ano de
nascimento, na pagina em HTML deve ser mostrado o nome de uma pessoa e sua
idade. */

/*  Elabore um script para mostrar o consumo médio de um automóvel. */


/* Elabore um script para efetuar o cálculo da média de 3 notas */

/* let nota1 = Number(prompt('Informe a 1ª nota: '))
let nota2 = Number(prompt('Informe a 2ª nota: '))
let nota3 = Number(prompt('Informe a 3ª nota: '))
 *//* let media = ((nota1 + nota2 + nota3)/3).toFixed(2) */


/* 
function calcularMedia() {
    return ((nota1 + nota2 + nota3)/3).toFixed(2)
}

let calcularMedia = () =>{
    return ((nota1 + nota2 + nota3)/3).toFixed(2)
}
document.write('A média do aluno é: ', calcularMedia()) */


/* OPERAÇÕES MATEMÁTICAS */

let numero1 = Number(prompt('Digite o 1ª número '))
let numero2 = Number(prompt('Digite o 2ª número '))

function somar() {
    return document.write('A soma é: ', numero1 + numero2 + '<br>')
}

function subtrair() {
    return document.write('A subtração: ',numero1 - numero2 + '<br>')
}

function mult() {
    return document.write('A multiplicação: ',numero1 * numero2 + '<br>')
}

function dividir() {
    return document.write('A divisão é: ', (numero1/numero2).toFixed(2))
}

somar()
subtrair()
mult()
dividir()