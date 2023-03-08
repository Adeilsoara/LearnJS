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


/*Criar uma função que converta uma temperatura de Celsius para Fahrenheit os dados de 
 temperatura devem ser informados pelo usuário. Obs.: F = C x 1.8 + 32*/

var celsius = parseFloat(prompt("Informa a temperatura em Celsius: "))
function celsiusFahrenheit() {
    return celsius * 1.8 + 32
}

document.write(`${celsius}º em Fahrenheit é: `, celsiusFahrenheit()) 


