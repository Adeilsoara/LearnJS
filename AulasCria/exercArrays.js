/*  EXERCÍCIOS ARRAYS */
let numeros = [5, 4, 3, 2, 1]

/* função push */
numeros.push(0)

document.write(numeros + '<br>')

/* inverter a ordem do array */

document.write(numeros.reverse() + '<br>')

/* Método Map */

numeroComMap = numeros.map(numero => numero * numero)

document.write(`${numeroComMap} <br>`)

/* Método filter */

numeroComFilter = numeros.filter(numero => numero >= 3)
document.write(`Números filtrados : ${numeroComFilter}`)