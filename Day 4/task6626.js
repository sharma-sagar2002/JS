function noOfWays(nums,currsum,ind,target){
    //base case 
    if(ind==nums.length){
        // target is achieved 
        // ternry oper....
        if(currsum==target){
            return 1;
        }
        return 0;
    }

    //adding the current element
    let op1=noOfWays(nums,currsum+nums[ind],ind+1,target);
    //subtract the current element
    let op2=noOfWays(nums,currsum-nums[ind],ind+1,target);
    //skip the current element and move to next one
    let op3=noOfWays(nums,currsum,ind+1,target);
    return op1+op2+op3; 
}

    // memoization 
    function countWaysToSum(index, rem,memo) {
        const key = `${index}#${rem}`;
        
        // base case         
        if (index < 0) {
            //target is achieved
			if (rem === 0) return 1;
			return 0;
        }
        // checking if call is happen previously
        if (memo.has(key)) return memo.get(key);
        // addition
        const plus = countWaysToSum(index - 1, rem + nums[index]) ;
        //subtraction
		const minus = countWaysToSum(index - 1, rem - nums[index]);
        // skip
        const noOp=countWaysToSum(index - 1, rem);
        //calculating no of ways 
	    const count = plus + minus+noOp;
	
        memo.set(key, count);
        
        return count;
    }

const nums = [-1, 9, 8, -3, 4];
let target=5;
let currsum=0;
const memo = new Map();
const n = nums.length;
//finding no of ways to get the target sum
console.log(noOfWays(nums,currsum,0,target));
console.log(countWaysToSum(0,target,memo))