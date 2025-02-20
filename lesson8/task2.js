const numbers = [1, 2, 3, 4, 5, 5, 6]

const func = (arr) => {
//     return arr.map(num => num * arr.indexOf(num))    // if we don't have duplication in this array
    return arr.map((num, index) => num * arr.indexOf(num, index))       // if we have duplication
    }

console.log(func(numbers))