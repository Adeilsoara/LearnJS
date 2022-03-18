/* Objetos */
//import { DateTime } from "luxon"
//const { DateTime } = require("luxon")



/* let gato = {
    nome: "Chanin",
    age: 3, 
    corDosOlhos: "azul",
    comidas: {
        favorita: "Peixe",
        naoGosta: "Laranja"
    },
    meuGato: function miau(){
        alert("Miauuuu")
    }
}

document.write(gato.meuGato()) */
//O método Stringify converte o objeto para uma visualização em JSON
//let converterObjeto = JSON.stringify(gato)
//document.write(gato.miau())
//console.log(gato.nome)


//Objeto Date

let data = new Date()
//document.write(data.getTime())
//document.write(data)
//document.write(`<br> A variável  'data' é do tipo: ${typeof(data)}`)
//console.log(data)

//Métodos
//Recupera a data em milisegundos desde o dia 01/01/1970
/* document.write(Date.now())
console.log(Date.now()) */

//instâncias do objeto Date
/* let dia = data.getDate()
document.write(dia)
let mes = (data.getMonth()+1)
document.write(mes)
let ano = data.getFullYear()
document.write(ano)
let horas = data.getHours()
document.write(horas)
let minutos = data.getMinutes()
document.write(minutos) */

//Calcular a diferença de tempo entre duas datas

//const dataNascimento = new Date("12-12-2012")
//const dataAtual = new Date()
//dataNascimento.getYear()
//document.write(dataAtual.getDate() - dataNascimento.getDate() )
//dataAtual.toDateString()
//document.write(dataAtual )
//dataAtual.toLocaleDateString()
//document.write(dataAtual.toLocaleDateString())

// Calcular o número de dias entre duas datas
/* 
    Define two dates using new Date().
    Calculate the time difference of two dates using date2.getTime() – date1.getTime();
    Calculate the no. of days between two dates, divide the time difference of both the dates by no. of milliseconds in a day (1000*60*60*24)
    Print the final result using document.write().
    (1000 * 60 * 60 * 24)
*/

/* let data1 = new Date("12/12/2012")
let data2 = new Date()

let diferencaEmTempo = data2.getTime() - data1.getTime() */

//console.log(diferencaEmTempo)

//let diferencaEmDias = diferencaEmTempo / (1000 * 3600 * 24)

//console.log(diferencaEmMeses)
/* document.write(`Total de dias entre as duas datas: <br>
                Data 1: ${data1.toLocaleDateString()} <br>
                Data 2: ${data2.toLocaleDateString()} <br>
                Numeros de dias: ${diferencaEmDias.toFixed()}  dias          
    `) */


//Criar uma função que calcula a idade de forma mais precisa
/* function calcularIdade(data) {
    const hoje = new Date()
    const dataNascimento = new Date(data)

    let idade = hoje.getFullYear() - dataNascimento.getFullYear(dataNascimento)

    const mes = hoje.getMonth() - dataNascimento.getMonth(dataNascimento)

    if ((mes < 0 || mes == 0) && (hoje.getDate() < dataNascimento.getDate())) {
        idade = idade - 1
    }

    return idade
}

idade = calcularIdade('2000-03-19')
document.write(idade) */
//document.write(data.getDate())
 

 /* let DateTime = luxon.DateTime
 console.log(DateTime.now().diff(DateTime.local('1982, 5, 25'), ['days', 'hours']))
 document.write(DateTime.now().diff(DateTime.local(1982, 5, 25), ['years', 'days'])) 