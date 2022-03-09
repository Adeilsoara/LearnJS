//Array com todos os cargos
let cargos = ['design', 'analista', 'programador', 'tester', 'engenheiro de dados']

// usar o for para imprimir cada elemento do array e inserir ele 
// em uma lista
const ul = document.querySelector("ul")

//mostrar os elementos do array e inserir cada um em uma lista
for (let i = 0; i < cargos.length; i++) {
    const li = document.createElement("li");
    li.innerText = cargos[i]
    ul.appendChild(li) 
}

let inputTexto = document.querySelector(".inputTexto")

function filtrarCargos() {
    console.log(inputTexto.value)

    let cargosFiltrados = []
    if (inputTexto.value != "") {
        //limpar a tela
        ul.innerText = ""

        // filtrar os nomes com a letra digitada no input
        for (let i = 0; i < cargos.length; i++) {
            if (cargos[i].includes(inputTexto.value)) {
                cargosFiltrados.push(cargos[i])
            } 
        }

        for (let i = 0; i < cargosFiltrados.length; i++) {
            const li = document.createElement('li')
            li.innerText = cargosFiltrados[i]
            ul.appendChild(li)
        }
    } else {
        //limpar o que tem na tela
        ul.innerText = ""
        // mostrar todos os nomes que estão no array
        for (let i = 0; i < cargos.length; i++) {
            const li = document.createElement("li")
            li.innerText = cargos[i]
            ul.appendChild(li)
        }
    }
}