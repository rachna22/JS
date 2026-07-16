// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false 

//console.log(tinderUser);

const regularUser = {
    email :"sam@gmail.com",
    fullname: {
        userfullname : {
            first :" Rachna",
            last : "Bhattoo"
        }
    }
} 
//console.log(regularUser.fullname)

const obj1 = {1 :"a",2:"b"}
const obj2 = {3:"d",4:"c"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id : 1,
        email: "r@gmail.com ",
    },
    {
        id : 2,
        email: "b@gmail.com ",
    },
    {
        id : 3,
        email: "r@gmail.com ",
    },
]

users[2].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
// converted into array 

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : " js in hindi ",
    price: "999",
    courseInstructor : "Hitesh"
}

// course.couseInstructor

const {courseInstructor} = course ;
//console.log(courseInstructor);
console.log(instructor);

// json

//{
  //  name : "Rachnna",
  //  "coursename" : "js in hindi",
 //   "price" : "free"
//}

[
    {},
    {},
    {}
]
