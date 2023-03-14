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


/********** Lista Turma 02 **********/

/* Criar uma função que converta uma temperatura de Celsius para Fahrenheit 
os dados de temperatura devem ser informados pelo usuário.
Obs.: F = C x 1.8 + 32*/

var celsius = parseFloat(prompt("Informa a temperatura em Celsius: "))
function celsiusFahrenheit() {
    return celsius * 1.8 + 32
}

document.write(`${celsius}º em Fahrenheit é: `, celsiusFahrenheit()) 


/* Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não. */ 
function numeroPrimo(n) {
    if (n === 1) {
        return "Número 1 não é primo."
    }else if(n < 1){
        return "Números negativos não são primos"
    }
    else{
        for(var i = 2; i < n; i++){
            if (n % i == 0) {
                primo = false
                break
            }
        }
    }

    if (primo) {
        return `${n} é um número primo`
    }else{
        return `${n} não é um número primo`
    }

}

var numero = Number(prompt("Informa um número: "))
let primo = true
document.write(numeroPrimo(numero))

/* Faça um programa que recebe três números do usuário, e identifica o maior através 
de uma função e o menor número através de outra função. */

function maiorEMenorNumero() {
  var num1 = parseInt(prompt("Digite o 1º número: "));
  var num2 = parseInt(prompt("Digite o 2ª número: "));
  var num3 = parseInt(prompt("Digite o 3ª número: "));

  var maior = num1;
  if (num2 > maior) {
    maior = num2
  }
  if(num3 > maior){
    maior = num3
  }

  var menor = num1
  if (num2 < menor) {
    menor = num2
  }
  if (num3 < menor) {
    menor = num3
  }

  document.write(`Maior é: ${maior} <br>`)
  document.write(`Menor é: ${menor}`)
}

maiorEMenorNumero()


