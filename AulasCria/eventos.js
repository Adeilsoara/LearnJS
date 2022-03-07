const inputTexto = document.querySelector(".inputTexto")

const valorInput = inputTexto.value

const btnAdd = document.querySelector(".btnAdd")

const ol = document.querySelector("ol")

btnAdd.addEventListener("click", adicionar)

function adicionar(event) {
    const inputTexto = document.querySelector(".inputTexto")
    const valorInput = inputTexto.value

    const li = document.createElement("li")
    li.innerText = valorInput

    ol.appendChild(li)
}