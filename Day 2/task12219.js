//rotate matrix by 90 degree

function rotateMatrix (nums){
   

    //transpose 
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<=i;j++){
      
            [nums[i][j],nums[j][i]] = [nums[j][i], nums[i][j]];

        }
    }

    for(let i=0;i<nums.length;i++){
        nums[i].reverse();
    }

    console.log(nums);
}

console.log(nums);
rotateMatrix(nums);