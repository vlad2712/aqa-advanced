
const car1 = {
    brand: `BMW`,
    model: `3 series`,
    year: 2021
    }

const car2 = {
    brand: `VW`,
    model: `Passat`,
    owner: 2018
    }

const car3 = {...car1, ...car2}

console.log(car3)