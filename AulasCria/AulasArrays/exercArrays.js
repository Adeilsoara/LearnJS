/*  EXERCÍCIOS ARRAYS */
let numeros = [5, 4, 3, 2, 1]

/* função push */
/* numeros.push(0)

document.write(numeros + '<br>') */

/* inverter a ordem do array */

/* document.write(numeros.reverse() + '<br>') */

/* Método Map */

/* numeroComMap = numeros.map(numero => numero * numero)

document.write(`${numeroComMap} <br>`) */

/* Método filter */

/* numeroComFilter = numeros.filter(numero => numero >= 3)
document.write(`Números filtrados : ${numeroComFilter}`) */

/* Preencher um vetor com os valores informados pelo usuário */
arrayLetras = []
while (arrayLetras.length <= 5){
    arrayLetras.push(prompt('Letras: '))
}

document.write(`${arrayLetras}`) 

/* Converter o array de letras para todas as letras maiusculas */

let letras= ['m', 'a' , 'n', 'o', 'e', 'l']

let maiusculas = letras.map(letra => letra.toUpperCase());
document.write(`Letras MAIÚSCULAS: ${maiusculas}`) 


let outrosNumeros = [1, 2, 3, 4, 5]
let dobro = []

for (let i = 0; i < outrosNumeros.length; i++) {
    dobro.push (outrosNumeros[i] * 2);
}

document.write(`Array em Dobro: ${dobro}`)