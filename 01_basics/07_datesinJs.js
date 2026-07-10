// dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let myDate1 = new Date(2023,0,23);
console.log(myDate1.toDateString());

let myDate2 = new Date(2023,0,23,5,30,20);
console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myDate.getTime());
console.log(Math.floor(Date.now()/(1000)));


let myDate3 = new Date()
console.log(myDate3.getFullYear());
console.log(myDate3.getMonth() + 1);
console.log(myDate3.getDate());
console.log(myDate3.getDay());


newDate.toLocaleString('default', { weekday: "long" })