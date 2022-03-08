let btnHover = document.getElementById("mudarCor")

btnHover.addEventListener("mouseover", mudarCor)
btnHover.addEventListener("mouseout", corNormal)


function mudarCor() {
    btnHover.style.background = "green"
}

function corNormal() {
    btnHover.style.background = ""
}

