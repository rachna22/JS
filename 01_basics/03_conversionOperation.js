let score ="33abc"
let point = null 

console.log(typeof score) ;
console.log(typeof(score)) ;
console.log(typeof point) ;


let valueInNumber = Number(score) // convert string to number
let valueInNumber2 = Number(point) // convert null to number

console.log(typeof valueInNumber) // NaN => Not a Number
console.log(valueInNumber) // NaN

console.log(typeof valueInNumber2) // number
console.log(valueInNumber2) // 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // convert number to boolean
console.log(booleanIsLoggedIn) // true

//"33" => 33
//"33abc" => NaN
//null => 0
//undefined => NaN
//true => 1

//1 => true ; 0 => false
//"" => false ; "abc" => true



// ********************* OPERATIONS ************************

let value = 3
let negValue = -value // -3
console.log(negValue)   

console.log("1" +2) // 12 => string concatenation
console.log(1 + "2") // 12 => string concatenation
console.log("1" + 2 + 2) // 122 => string concatenation
console.log(1 + 2 + "2") // 32 => number addition first then string concatenation

console.log(+true);
console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter = 100
gameCounter++ // 101
console.log(gameCounter)

