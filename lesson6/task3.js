
function checkOrder2(available, ordered) {
    if (typeof available === `number` && typeof ordered === `number` ) {
        if (available === 0) {
            return `Your order is empty`
        } else if (available < ordered) {
            return `Your order is too large, we don’t have enough goods`
        } else {
            return `Your order is accepted`
            }
        }
    return `available or ordered isn't a number`
        }

console.log(checkOrder2(10, 2 ))