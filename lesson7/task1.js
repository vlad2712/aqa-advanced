
const handleEven = (numb) => `number ${numb} is even`
const handleOdd = (numb) => `number ${numb} is odd`

const handleNum = (numb, func1, func2) => {
    if (numb % 2 === 0) {
        console.log(func1(numb))
        } else {
    console.log(func2(numb))
    }
}


handleNum(7, handleEven, handleOdd)