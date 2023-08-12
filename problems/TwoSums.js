
var twoSum = function (nums, target) {
    const result = [];
    const outputObj = [0, 0];
    
    for (let i = 0; i < nums.length; i++) {

        for (let j = i; j < nums.length; j++) {
            if(nums[i] != nums[j]) {
            const sum = nums[i] + nums[j];
            result.push(sum);

            if(target === sum) {
                if(outputObj[1] < 1) {
                    outputObj[1] = outputObj[1] + 1;
                } else {
                    outputObj[0] = outputObj[0] + 1;
                    outputObj[1] = outputObj[1] + 1;
                }
            }

            }
        }

    }
return result;
};


console.log(twoSum([2, 7, 11, 15], 9)) // 6 loops
console.log(twoSum([3, 2, 4], 6)) // 3 loops
console.log(twoSum([3, 3], 6)) // 1 loop