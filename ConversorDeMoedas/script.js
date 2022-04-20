const dolar = document.getElementById('dolar')
const real = document.getElementById('real')
const resultado = document.getElementById('resultado')
const btn = document.getElementById('btn')

function calcular() {
    const moeda1 = dolar.value
    const moeda2 = real.value

    fetch("https://open.exchangerate-api.com/v6/latest")
        .then(res => res.json())
        .then(data => {
            const valor = data.BRL[moeda2] / data.USD[moeda1]
            resultado.innerText = `1 ${moeda1} = ${valor} ${moeda2}`
        })
}

dolar.addEventListener('input', calcular)
real.addEventListener('input', calcular)

btn.addEventListener('click', ()=>{
    const temp = dolar.value
    dolar.value = real.value
    real.value = temp
    calcular()
})

calcular()