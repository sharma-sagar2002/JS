function sumOfNestedArray (nums){
    let sum=0;
    // traversing array 
    for(let i=0;i<nums.length;i++){
        //checking if the element is object type 
        if( typeof (nums[i]) == "object"){
            sum+=sumOfNestedArray(nums[i]);
        }
        else {
            // normal adding the elements to calculate result 
            sum+=nums[i];
        }
    }
    
    return sum;
}


let sum=sumOfNestedArray([1, [2, [3, 4]], 5]);