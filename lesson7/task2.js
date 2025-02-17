
const func = (num) => {
    if (num >= 0) {
        console.log(num)
        func(num - 1)
    }
}

func(5)