// //Functions 

// function addOne(val){
//     return val+1;
// }

// console.log(addOne(2)); // 3
// console.log(addOne());  //undefined
// console.log(addOne("2")); //21

// // if we dont know how many parameters will come as a argument --> use rest/spread operator ...
// function calculatePrice(...num){
//     console.log(num);  // packs all the arguments into an array
// }

// calculatePrice(1,2,30);

// //passing object as an argument
// function display (getObject){
//     console.log(getObject.name+" is my original name");
// }

// const userDetails={
//     name: "Sagar Sharma",
//     age: 21,
// }

// display(userDetails);


// //passing array as argument
// const arr=[1,2,3];
// function getFirstElement(getArr){
//     return getArr[0];
// }
// getFirstElement(arr);

// //Types of writing a function
//  - Normal function  (covered above)
//  - Function expression  
//  - Arrow Function  


// //function expression
// const addOne = function(val){
//    return val+1;
// }


// //arrow function
// const addOne = (val)=>{
//    return val+1;
// }

// // condtional statement
//  - if-else 
//  - switch

//  // if-else -> example
//  function canDrive(age) {
//     if(age>18) {
//         console.log("can drive");
//     }
//     else console.log("can't drive");
//  }



//higher order array loop
// for of loop

const arr = [1,2,3,4];
for(const num of arr){
    console.log(num);
}

const greetings = "sagar";
for(const greet of greetings) {
    console.log(greet);
}


// Map  - unique values and also remembers order of insertion

const map=new Map();
map.set('IN', "India");
map.set('USA', "America");
//printing map
for(const key of map){
    console.log(key);
}
//it will print whole map not just key so to do seperately we do this
for(const [key,value] of map){
    console.log(key +"::"+value );
}

//we can't iterate object using loop

const myObj= {
    js: "javascript",
    cpp:"c++",
}
// for in loop can be used for iterating in object 
for (const key in myObj){
    console.log(key +"->"+myObj[key]);
}
// key will give you keys not all things 

// iterating on an array
const shortcuts =["js", "cpp", "ruby"];
for(const key in shortcuts){
    console.log(key);
}
//0 ,1, 2
for(const key in shortcuts){
    console.log(shortcuts[key]);
}
// js,cpp,ruby
// we can't iterate on map using for-in loop bcz map is not iteratable like array


//for-each loop
const coding =["js","ruby","java","python","ruby","cpp"]
coding.forEach( function (val){
   console.log(val);
})
//print all values 
//arr.forEach(callback function ) -- callback function does not have name 
//more syntaxs
coding.forEach((val)=>{
    console.log(val);
})
//same answer

function printVal(item){
    console.log(item)
}
coding.forEach(printVal);  //only give refernce don't execute it 
//same answer

// the above callback has three parameters in it - Element, index, array(current iterating)






