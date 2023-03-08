 /*Criar uma função que converta uma temperatura de Celsius para Fahrenheit os dados de 
 temperatura devem ser informados pelo usuário. Obs.: F = C x 1.8 + 32*/

var celsius = parseFloat(prompt("Informa a temperatura em Celsius: "))
function celsiusFahrenheit() {
    return celsius * 1.8 + 32
}

document.write(`${celsius}º em Fahrenheit é: `, celsiusFahrenheit()) 


