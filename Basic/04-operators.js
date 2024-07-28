// Operadores

// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // MUltiplicación
console.log(a / b) // División

console.log(a % b) // Módulo (residuo de la división)
console.log(a ** b) // Exponente

a++ // Incremente
console.log(a++) 

b-- //Decremente
console.log(b)

// Operadores de asignación

let myVarible = 2
console.log(myVarible)
myVarible += 2
console.log(myVarible)

myVarible -= 2
myVarible *= 2
myVarible /= 2
myVarible %= 2
myVarible **= 2

// Operadores de comparación 

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6)  // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a == a)
console.log(a === a) // Igualdad por entidad (por tipo y valor)
console.log(a === 6)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values (valores verdaderos)

// Todos los numeos positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacías
// El boollean true

// Faisy values (valores falsos)
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías

// Operadores lógicos

// and (&&)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 < 10 && 15 < 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = true

isRaining  ? console.log("Esta lloviendo") : console.log("No esta lloviendo")