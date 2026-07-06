// Primitive 
// 7 types : string, number, bigint, boolean, undefined, symbol, null

const score = 100
const scoreValue = 100.1

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false

const bigNumber = 12345678905555550n


// Reference type (non-primitive)
// Array, Object, Functions 

const heros = ["shaktiman", "naagraj", "doga"]
const myObj = {
    name: "hitesh",
    age: 20
}
const myFunction = function() {
    console.log("Hello world");
}


//null== object
console.log(typeof null) // object

console.log(typeof bigNumber) // bigint
console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof myFunction) // function

//+++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitives) and Heap (Reference types) memory allocation

let myName ="Rachna"
let anotherName = myName
anotherName = "sharayu"

console.log({myName, anotherName}) // { myName: 'Rachna', anotherName: 'sharayu' }

let userOne = {
    email: "user@google.com",
    upi : "user@upi"
}

let userTwo = userOne
userTwo.email = "user2@google.com"

console.log(userOne.email); 
console.log(userTwo.email);
