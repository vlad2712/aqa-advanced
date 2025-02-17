

const divide = (numerator, denominator) => {
    if (denominator > 0) {
        if (typeof numerator === `number` && typeof denominator === `number`) {
            return numerator / denominator;
            } throw new Error("Numerator or denominator isn't a number!");
        } throw new Error("denominator is 0!");
    }

try {
    console.log(divide(10, 5))
//     console.log(divide(10, 0))
//     console.log(divide(10, `5`))
    } catch  (error ) {
        throw new Error(error);
        } finally {
            console.log(`Робота завершена`)
            }
