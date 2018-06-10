/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayA = function(nums) {
    var currentMax = nums[0];
    var maxAtThisPoint = nums[0];
    
    for (var i = 1; i < nums.length; i++) {
        maxAtThisPoint = Math.max(maxAtThisPoint + nums[i], nums[i]);
        currentMax = Math.max(maxAtThisPoint, currentMax);
    }
    
    return currentMax;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
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

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayB = function(nums) {
    var currentMax = nums[0];
    var maxAtThisPoint = nums[0];
    
    for (var i = 1; i < nums.length; i++) {
        maxAtThisPoint = maxAtThisPoint + nums[i];
        if (maxAtThisPoint < 0) maxAtThisPoint = 0;
        else if (maxAtThisPoint > currentMax) {
            currentMax = maxAtThisPoint;
        }
    }
    
    return currentMax;
};

module.exports = {
    maxSubArrayA: maxSubArrayA,
    maxSubArrayB: maxSubArrayB,
    arrayMaxSubArray: arrayMaxSubArray  
}