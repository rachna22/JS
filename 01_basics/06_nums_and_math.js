const score = 100 
console.log(score);

const balance = new Number(500.00)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.456789
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(2));

const hundred = 1000000
console.log(hundred.toLocaleString("en-IN")); 


// ++++++++++++++++ MATHS ++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.7));
console.log(Math.floor(4.7)); //minimum value
console.log(Math.ceil(4.2)); //high value 
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20; 

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // formula to get random number between min and max