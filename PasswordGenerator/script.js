const randomFunc = {
    lower: getRamdomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
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