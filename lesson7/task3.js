

const divide = (numerator, denominator) => {
    if (denominator > 0) {
        if (typeof numerator === `number` && typeof denominator === `number`) {
            return numerator / denominator;
            } throw new Error("Numerator or denominator isn't a number!");
        } throw new Error("denominator is 0!");
    }


const validateResult = (func) => {
    try {
        console.log(func)
        } catch  (error ) {
            throw new Error(error);
            } finally {
                console.log(`Робота завершена`)
                }
    }

validateResult(divide(10, 5))
validateResult(divide(10, 0))
validateResult(divide(10, `5`))