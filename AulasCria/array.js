/* Arrays */
let numero = 7

let minhasCores = ["vermelho", "verde", "amarelo"]

let meuBichinhos = [{nome: "Bichano", especie: "gato"},
{nome:"Joli", especie:"cachorro" }]

minhasCores.push("preto")
minhasCores.splice(1, 1)
document.write(minhasCores)

/* Imprimir itens com forEach */

let nomes = ['Barbara', 'Wilson', 'Carlos', 'Leandro']

function imprimirNomes(item) {
    document.write(item + ' ')
}

nomes.forEach(imprimirNomes) 

/* Utilizando arrow functions */
nomes.forEach(item => document.write(item))

/* Verificar números pares com forEach */

let meusNumeros = [9, 2, 6, 7, 8]
function verificaPares(elemento) {
    if (elemento % 2 == 0) {
        document.write(elemento + '<br>')
    }
}

meusNumeros.forEach(verificaPares)

/* Somar elementos de um array */

let numeros = [0, 1, 2, 3, 5]
let total = 0
function somarItensArray(item, indice) {
     total += item
/*      document.write("[Índice " + indice + " ]= " + total + " -> ")
 */
}

numeros.forEach(somarItensArray)
document.write(total)

/* Criar novo array apartir de um outro array */

let nomes1 = ['Alberto', 'Angelo', 'Carlos', 'Livia']
let nomes2 = []
let novoIndice = 0

function procucarNomes(item, indice) {
    if (nomes1[indice].indexOf("A") == 0) {
        nomes2[novoIndice] = nomes1[indice]
        novoIndice++
    }
}

nomes1.forEach(procucarNomes)
document.write(nomes2)

/* Objetos */

let gato = {
    nome: "Chanin",
    age: 3, 
    corDosOlhos: "azul",
    comidas: {
        favorita: "Peixe",
        naoGosta: "Laranja"
    },
    miau(){
        alert("Miauuuu")
    }
}

gato.comidas.favorita

/* document.addEventListener("click", cliqueAqui)

function cliqueAqui() {
    alert("Você clicou!")
} */

let nome = 'Raimundo'
let idade = 15
document.write("Meu nome é  " + nome + 'e sou estudante e tenho ' + idade + ' anos')
document.write(`Meu nome é ${nome} e sou estudante e tenho ${idade} anos`)

