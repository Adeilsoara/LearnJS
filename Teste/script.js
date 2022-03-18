/* const numeros = [5, 50, 40, 30, 10, 2]
const numero = Math.floor(Math.random() * numeros.length)
console.log(numeros[numero]) */

const arr = ['a', 'c', 'd', 'b']


/* for (let i = 0; i < 30; i++) {
  arr.push(i)
}  */      

//Código para ordenar o Array de forma aletória
for (let i = 0; i < arr.length; i++) {
 const j = Math.floor(Math.random() * (i + 1));
 let sorteio = [arr[i], arr[j]] = [arr[j], arr[i]];
 console.log(sorteio)
}

console.log(arr)

document.write(arr)

/* function listarTabela(){
    let tbody = document.getElementById('tbody')
    for (let i = 0; i < arr.length; i++) {
        let tr = tbody.insertRow()

        let tdValor1 = tr.insertCell()
        let tdValor2 = tr.insertCell()
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        tdValor1.innerText = arr[i]        
    }
}
listarTabela() */
