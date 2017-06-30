/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var currentMax = nums[0];
    var maxAtThisPoint = nums[0];
    
    for (var i = 1; i < nums.length; i++) {
        maxAtThisPoint = Math.max(maxAtThisPoint + nums[i], nums[i]);
        currentMax = Math.max(maxAtThisPoint, currentMax);
    }
    
    return currentMax;
};

// Test
maxSubArray(array) // 6



// This will return the array of the max sum
// 
var arrayMaxSubArray = function(nums) {
    var currentMax = nums[0];
    var maxAtThisPoint = nums[0];
    var startIndex = 0, endIndex = 1;
    
    for (var i = 1; i < nums.length; i++) {
        maxAtThisPoint = Math.max(maxAtThisPoint + nums[i], nums[i]);
        currentMax = Math.max(maxAtThisPoint, currentMax);
        
        if (maxAtThisPoint === nums[i]) startIndex = i
        if (currentMax === maxAtThisPoint) endIndex = i + 1
    }

    return nums.slice(startIndex, endIndex);
};

// Test
arrayMaxSubArray(array) // [ 4, -1, 2, 1 ]