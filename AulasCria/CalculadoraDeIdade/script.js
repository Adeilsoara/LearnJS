function calcularIdade() {
    let dia1 = document.getElementById('dia').value
    let mes1 = document.getElementById('mes').value
    let ano1 = document.getElementById('ano').value

    let data = new Date()
    let dia2 = data.getDate()
    let mes2 = 1 + data.getMonth()
    let ano2 = data.getFullYear()

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

    document.getElementById('idade').innerHTML = `Você tem ${ano} anos e ${mes} meses e ${dia} dias`
}