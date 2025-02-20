const numbersList = [1,10,14,2,4,5,43,34]

const copyArray = (arr) => [...arr].sort((a, b) => a - b)

console.log(`original: ${numbersList}`)
console.log(`sorted: ${copyArray(numbersList)}`)