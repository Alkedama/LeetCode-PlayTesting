var twoSum = function (nums, target) {
    const numIndicesMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndicesMap.has(complement)) {
            return [numIndicesMap.get(complement), i];
        }
        numIndicesMap.set(nums[i], i);
    }
};

console.log(twoSum([2, 7, 11, 15, 15], 22))
console.log(twoSum([3, 2, 4], 6)) // 3 loops
console.log(twoSum([3, 3], 6)) // 1 loop