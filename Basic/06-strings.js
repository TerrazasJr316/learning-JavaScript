// Strings

let myName = "Josue"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// longitud

console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[11])


// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Josue"))
console.log(greeting.indexOf("JosueJr316"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Josue"))
console.log(greeting.includes("JosueJr316"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Josue", "JosueJr316"))

// Template literals (plantillas literales)

let message = `Hola es un
curso de JavaScript`

console.log(message)

let email = "terrazasjosue0@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)