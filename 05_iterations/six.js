const coding = ["java","py","rb","cpp","js"]

const values = coding.forEach((item)=>{
    //console.log(item);
    return item // yeh kabhi bhi kuch return nhi krta result undefined
})

//console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> num > 4)
// console.log(newNums);

const newNums = myNums.filter((num)=> {
  //  return num > 4 
} ) // yahan scope h isliye yahan return krna padega

//console.log(newNums);

const newNums = []

myNums.forEach ( (num) => {
    if(num>4){
        newNums.push(num)
    }
})
 // console.log(newNums);


