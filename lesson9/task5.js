
const users = [
    {name: `Vlad`, email: `vlad@gmail.com`, age: 25},
    {name: `Vova`, email: `vova@gmail.com`, age: 22},
    ]

for (const element of users) {
    const {name, email, age} = element
    console.log(name)
    console.log(email)
    console.log(age)
    }
