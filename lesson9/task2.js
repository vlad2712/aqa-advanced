
const book = {
    title: `Spain history`,
    author: `H. Magelan`,
    year: 1655,
    }

const {title = undefined, author = undefined } = book

console.log(title)
console.log(author)