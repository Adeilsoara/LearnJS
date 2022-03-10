let mudarCor1 = document.getElementById("q1")
let mudarCor2 = document.getElementById("q2")
let mudarCor3 = document.getElementById("q3")

mudarCor1.addEventListener("mouseover", mudarCor)
mudarCor1.addEventListener("mouseout", voltarCor)

mudarCor2.addEventListener("mouseover", mudarCorQuadrado2)
mudarCor2.addEventListener("mouseout", voltarCorQuadrado2)

mudarCor3.addEventListener("mouseover", mudarCorQuadrado3)
mudarCor3.addEventListener("mouseout", voltarCorQuadrado3)

function mudarCor() {
     mudarCor1.style.background = "green"
    /*  mudarCor1.style.background = "url('https://source.unsplash.com/random/200x200')";  */

}

function voltarCor() {
    mudarCor1.style.background = ""
}

function mudarCorQuadrado2() {
    mudarCor2.style.background = "red"
}

function voltarCorQuadrado2() {
    mudarCor2.style.background = ""
}

function mudarCorQuadrado3() {
    mudarCor3.style.background = "blue"
}

function voltarCorQuadrado3() {
    mudarCor3.style.background = ""
}
