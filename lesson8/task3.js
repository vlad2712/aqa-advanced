const numbers = [10, 20, 30, 40, 50];

const listCounter = (arr) => arr.reduce((accumulate, currentValue) => accumulate + currentValue)

console.log(listCounter(numbers))