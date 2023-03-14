const url = "https://economia.awesomeapi.com.br/last/";
const moedas = "USD-BRL";
const valor = document.getElementById("converter").value;

fetch(url + moedas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    /*  console.log(data) */
    const dolarReal = data.USDBRL;
    document.getElementById("title").innerHTML = dolarReal.name;
    document.getElementById("thisdate").innerHTML = dolarReal.create_date;
    const dolarAlto = (document.getElementById("maxvalue").innerHTML =
      dolarReal.high);
    document.getElementById("minvalue").innerHTML = dolarReal.low;
    const conversao = (document.getElementById("conversao").innerHTML =
      `${dolarAlto}` * valor);
  });
