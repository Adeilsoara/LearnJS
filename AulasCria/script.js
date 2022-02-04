/* var nota1 = 8
var nota2 = 6
var nota3 = 5 */

//console.log(media.toFixed(2))
//document.write('A média é: ' + media.toFixed(2))
var a = Number(prompt('1ª nota: '))
var b = Number(prompt('2ª Nota: '))
var c = Number(prompt('3ª Nota: '))

var media = (nota1 + nota2 + nota3)/3

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3)/3
}

document.write('A média é: ' + calcularMedia(a, b, c).toFixed(2))