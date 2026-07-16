// singleton
//object.create

// object literals

const mySym = Symbol("key1")
// learn how to write symbol to write full name type things
const JsUser = {
    name : "Rachna",
    "full name" : "Rachna Bhattoo",
    [mySym] : "mykey1",
    age : 20 ,
    location : "Haryana",
    email : "rachna@google.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

JsUser.email = "rachna@chatgpt.com"
Object.freeze(JsUser)
// iske baad koi bhi value daalo change nhi hogi
JsUser.email = "rachna@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());