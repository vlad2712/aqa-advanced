const isNotChild = (age) => {
    if (typeof age === `number`) {
        if (age >= 18) {
                return true
                }
            return false
            }
        return console.error(`Age is not a number`)
        }

console.log(isNotChild(15))
console.log(isNotChild(25))
console.log(isNotChild(`12`))