/********** Lista Turma 01 **********/


/* Escreva uma função que retorne o cubo de um número fornecido pelo usuário. */

let num = Number(prompt("Informe um número: "))
function cubo() {
    return Math.pow(num,3)
}

document.write(`${num}³ é: `, cubo()) 

/* Criar uma função para calcular a porcentagem de um número informado pelo usuário,
este deve informar o número e qual a porcentagem que ele deseja saber, por exemplo:
Usuário informa: 100
Usuário informa a porcentagem desejada: 10 
Resultado: 10% de 100 = 10 */

var num = Number(prompt("Informe um número: "))
var porcentagem = Number(prompt("Qual a porcentagem que deseja saber?: "))
function calcularPorcentagem(num, porcentagem) {
    return (num/100)*porcentagem
}

document.write(`${porcentagem}% de ${num} é: `, calcularPorcentagem(num, porcentagem))


/* Criar uma função que converta uma temperatura de Fahrenheit para Celsius
os dados de temperatura devem ser informados pelo usuário
Obs.: Para converter graus Fahrenheit em graus Celsius, subtraia 32 e divida por 1,8.

°C = (°F − 32) ÷ 1.8*/

var fahrenheit = parseFloat(prompt("Informe a temperatura em Farenheits: "))
function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit-32)/1.8
}

document.write(`${fahrenheit} em Celsius é: `, fahrenheitCelsius(fahrenheit).toFixed(2))


