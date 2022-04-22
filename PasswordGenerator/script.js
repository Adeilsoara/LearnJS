const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const randomFunc = {
    lower: getRamdomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    //plus signal before lengthEl convert a string in number
   /*  console.log(length) */
   const hasLower = lowercaseEl.checked
   const hasUpper = uppercaseEl.checked
   const hasNumber = numbersEl.checked
   const hasSymbol = symbolsEl.checked

   /* console.log(hasLower, hasUpper, hasNumber, hasSymbol) */
   resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = ''
    const typesCount = lower + upper + number + symbol
    /* console.log(typesCount) */
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
   /*  console.log(typesArray) */

   if (typesCount === 0) {
       return ''
   }

   for (let i = 0; i < length; i += typesCount) {
       typesArray.forEach(type => {
           /* console.log(type) */
           const funcName = Object.keys(type)[0]
           /* console.log(funcName) */
           generatePassword += randomFunc[funcName]()
       })
   }

   const finalPassword = generatePassword.slice(0, length)

   return finalPassword
}

function getRamdomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
/* console.log(getRamdomLower()) */

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

/* console.log(getRandomUpper()) */

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)   
}

function getRandomSymbol() {
    const symbols = '!"#$%&()*+-./{}[]=<>,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getRandomSymbol())