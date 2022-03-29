function gerarAleatorio() { 
    numero1 = Math.floor(Math.random() * 40 + 1);
    numero2 = Math.floor(Math.random() * 40 + 1);

    //Esses 'num1' e 'num2' são os ids das tags 'p' lá da página index
    document.getElementById("num1").innerHTML = numero1;
    document.getElementById("num2").innerHTML = numero2;
}