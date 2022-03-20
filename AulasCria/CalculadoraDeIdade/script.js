function calcularIdade() {
    //Nesta 1ª parte capturamos o que o usuário digita nos inputs
    let dia1 = document.getElementById('dia').value
    let mes1 = document.getElementById('mes').value
    let ano1 = document.getElementById('ano').value
    
    //Para fazer o cálculo da idade é necessário pegar a data do dia atual
    //Nesta parte do código fazemos isso
    let data = new Date()
    let dia2 = data.getDate()
    let mes2 = 1 + data.getMonth() //Como os meses em javascript iniciam de 0 aqui acrestamos 1 para que a contagem vá de 1 até 12, ao invés de 0 até 11
    let ano2 = data.getFullYear()

    //Criamos um array com a quantidade de dias de cada mês do ano
    let ultimoDiaDeCadaMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (dia1 > dia2) {
        dia2 = dia2 + ultimoDiaDeCadaMes[mes2 - 1]
        mes2 = mes2 - 1
    } 

    if (mes1 > mes2) {
        mes2 = mes2 + 12
        ano2 = ano2 - 1
    }

    let dia = dia2 - dia1
    let mes = mes2 - mes1
    let ano = ano2 - ano1

    //Aqui é feito a inserção do resultado do cálculo da idade, através do método innerHTML que insere a mensagem na
    // página, também utilizamos os literals para modelagem da impressão da mensagem
    document.getElementById('idade').innerHTML = `Você tem ${ano} anos e ${mes} meses e ${dia} dias`
}