// Função para calcular a idade com base na data de nascimento.
// Origem (SOpt): https://pt.stackoverflow.com/questions/5160/como-calcular-a-idade-de-uma-pessoa-com-js-a-partir-da-data-de-nascimento#answer-5162
function getAge(birth) {
  const current = new Date()
  let diff = current.getFullYear() - birth.getFullYear()

  if (
    new Date(current.getFullYear(), current.getMonth(), current.getDate()) <
    new Date(current.getFullYear(), birth.getMonth(), birth.getDate())
  )
    diff--

  return diff
}

// "Pegar" os elementos dos campos:
const birthField = document.querySelector('#birth')
const ageField = document.querySelector('#age')

// Calcular a idade sempre que o campo da data de nascimento for alterado:
birthField.addEventListener('change', (event) => {
  const date = new Date(event.target.value)

  // Note abaixo que estou concatenando a idade calculada com o termo "anos":
  ageField.value = getAge(date) + ' anos'
})