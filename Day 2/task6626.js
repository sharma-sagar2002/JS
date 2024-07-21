function findWays(nums, target)
    {
      return noOfWays(nums, target, 0, 0);
    }
 
    // Function to count the number of ways
    function noOfWays(nums, S, curr_sum, index)
    {
      // base case
      if (index == nums.length)
      {
 
        if (target == curr_sum)
          return 1;
        else
          return 0;
      }
   
      return findWays(nums, S, curr_sum +  nums[index], index + 1) +findWays(nums, S, curr_sum - nums[index], index + 1);
    }
     
    let target= 5;
    let arr = [ -1, 9, 8, -3, 4 ];
    let answer = findWays(arr, target);
    console.log(answer);