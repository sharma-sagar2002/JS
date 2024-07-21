
// spread or rest operator usage and passing functions as arguments 

//add the elements
function addition(nums){
    let sum=0;
    console.log(nums.reduce((acc,ele)=>{
         acc=acc+ele;
    },0));
    console.log(`Addition of all the elements is ${sum}`);
}
//multiply elements
function multiply (nums){
    let prod=1;
    for(const num of nums){
        prod*=num;
    }
    console.log(`Product of elements is : ${prod}`);
}
//divide 2 numbers
const divide = (nums)=>{
   if(nums.length>2){
    console.log("Can't divide");
    return ;
   }

    // do this with try catch and throw exception, we can do also for the n values
   if(nums[1]==0) {
    console.log("Divide by zero exception occured ");
    return ;
   }
   console.log("Division result is : "+ nums[0]/nums[1]);
}
// price calculator 
function calculatePrice(calculator, ...num){           
    calculator(num);

}

// make seperated method for the validator
// validator(data = [],type){
//     // read about, every, some,
//     if(data.every((elm)=> typeof elm !== type)){
//         throw new Error(`Type is not matched, type should be ${type} `)
//     }
// } // type='num'|'string'
operation (nums,type){
    if(type ==='/') return divide(nums);
    else if(type==='+') return  sum(nums);
    else if(type==='*') return multiply(nums);
    else throw new Error ("not selected a valid operation to perform")
}


// mapper object for different type of operations 
const calcMapper = {
    'divide': (nums)=> {
       try{
        operation(nums,'/')
       } 
       catch(e) {
        console.log(e);
       }
    }, 
    'sum': (nums)=>{
        try{
            operation(nums,'+')
           } 
           catch(e) {
            console.log(e);
           }
    } , 
    'mul': (nums)=> {
        try{
            operation(nums,'*')
           } 
        catch(e) {
            console.log(e);
         }
    }
}

const values =[1,2,0,3,4];
calcMapper.divide(values);
calcMapper.multiply(values);
calcMapper.sum(values);


