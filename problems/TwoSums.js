var twoSum = function (nums, target) {
    const result = [];
    const outputIndex = [0, 0];
    
    for (let i = 0; i < nums.length; i++) {

        for (let j = i; j < nums.length; j++) {
            if(i !== j) {
            const sum = nums[i] + nums[j];
            result.push(sum);

            if(nums[i] + nums[j] === target) {
                outputIndex[0] = i;
                outputIndex[1] = j;
            }
            }
        }

    }
return outputIndex;
};


console.log(twoSum([2, 7, 11, 15], 9)) // 6 loops
console.log(twoSum([3, 2, 4], 6)) // 3 loops
console.log(twoSum([3, 3], 6)) // 1 loop