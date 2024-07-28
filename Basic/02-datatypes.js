// Tipos de datos primitivos

// Cadena de texto (String)
let name = "Josue Terrazas"
let alias = 'TerrazasJr316'
let email = `terrazasjosue0@gmail.com`

// Números (number)
let age = 21 // Entero
let height = 1.73 // Decimal

// Booleanos (boolean)
let isYoung = true
let isOld = false

// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null // no hay valor

// la diferencia entre undefined es que no se guarda nada aun y el null es dejar intencionalmente sin valor

// Symbol
let mySymbol = Symbol("mySymbol") // Represantan valores unicos e inmutables


// BigInt
let myBigInt = BigInt(304985237654093485938453903423423475656)
let myBigInt2 =  304985237654093485938453903423423475656

//El BigInt es un tipo de dato cuando queremos guardar un numero ENTERO muy grande

// Mostramos el tipo de dato
console.log(typeof name)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isOld)
console.log(typeof isYoung)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)