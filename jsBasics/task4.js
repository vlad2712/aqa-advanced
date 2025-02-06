// Завдання 4: Обчислення площі та об'єму
//
// Завдання 4.1
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
//
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.


// Завдання 4.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

// Завдання 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки


// 4.1
let radius = 10;

function circleRadius (radius) {
    return (Math.PI * radius ** 2).toFixed(2)
    }

console.log(`circleRadius: ${circleRadius(radius)}`);


// 4.2
let length = 4;
let width = 7;

function rectangleArea (length, width) {
    return (length * width).toFixed(2)
    }

console.log(`rectangleArea: ${rectangleArea(length, width)}`);


// 4.3
radius = 10;         // variable with this name was initialized for the first task
let height = 26;

function cylinderVolume (radius, height) {
    return (Math.PI * radius ** 2 * height).toFixed(2)
    }

console.log(`cylinderVolume: ${cylinderVolume(length, width)}`);
