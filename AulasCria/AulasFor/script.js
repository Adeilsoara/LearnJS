//Somar elementos
/* let soma = 0
const n = 10

for (let i = 0; i < n; i++) {
    soma += i // soma = soma + i
    document.write(`A soma do ${i}ª = ${soma} <br>`)
}

document.write(`A soma total é: ${soma}`) */

//Somar elementos ao inverso

/* let soma = 0
const n = 9

for (let i = n; i >= 0; i--) {
    soma += i // soma = soma + i
    document.write(`A soma do ${i}ª = ${soma} <br>`)
}

document.write(`A soma total é: ${soma}`) */

//For para percorrer um array
let nomes = ['maria', 'joao', 'pedro', 'carlos']

for (let i = 0; i < nomes.length; i++) {
    const element = nomes[i];
    document.write(`${element} ${i}ª nome do array <br>`)
}