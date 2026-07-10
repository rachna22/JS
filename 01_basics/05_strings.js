const name = "Rachna"
const repoCount = 50

//console.log(name + " has " + repoCount + " repositories") // concatenation    
console.log(`${name} has ${repoCount} repositories`) // template string

const gameName = new String("Rachna-Bhattoo")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const newstring = gameName.substring(0, 4);
console.log(newstring);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  Rachna  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rachna.com/rachna%20bhattoo"
console.log(url.replace("%20", "-"));   
console.log(url.includes("rachna"));

console.log(url.split("/"));