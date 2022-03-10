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

//selecionar o que está sendo digitado no campo input
let inputTexto = document.querySelector(".inputTexto")

function filtrarCargos() {
    console.log(inputTexto.value)

    //array para os cargos que serão filtratos
    let cargosFiltrados = []
    if (inputTexto.value != "") {

        //limpar a tela enquanto o usuário digita no input
        ul.innerText = ""

        // filtrar os nomes com a letra digitada no input e jogar dentro do array cargosFiltrados
        for (let i = 0; i < cargos.length; i++) {
            if (cargos[i].includes(inputTexto.value)) {
                cargosFiltrados.push(cargos[i])
            } 
        }
        // para cada elemento que foi sendo encontrado no array cargosFiltrados vai sendo criada a sua lista
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

/* window.addEventListener('load', (e) => {
    alert('página carregada')
}) */