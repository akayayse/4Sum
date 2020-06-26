var fourSum = function(nums, target){
    nums= nums.sort();
    const result =[];
    const n= nums.lenght;
    let l;
    for(let i=0; i<n-3; i++) {
        for(let j=i+1; j<n-2; j++) {
            for(let k=j+1; k<n-1; k++) {
               for(let l=k+1; l<n; l++) { 
                   if (nums[i]+nums[j]+nums[k]+nums[l]=== target){
                       result.push([nums[i], nums[j], nums[k], nums[l]])
                   }
               }
            }
        }
    }
    return Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);
};

console.log(fourSum([-5,5,4,-3,0,0,4,-2], 4));