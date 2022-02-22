let meuForm = document.getElementById("meuForm")
let meuNome = document.getElementById("nome")
let altura = document.getElementById("altura")
let peso = document.getElementById("peso")
let thNome = document.getElementById("thNome")
let thAltura = document.getElementById("thAltura")

meuForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    createItem(meuNome.value)
    
})

function createItem(x, y) {
    let ourHTML = `<th>${x}</th> <th>${y}</th>`
    thNome.insertAdjacentHTML("beforeend", ourHTML)
    thAltura.insertAdjacentHTML("beforeend", ourHTML)
    altura.value = ""
    meuNome.value = ""
    meuNome.focus()
    altura.focus()
    
}
