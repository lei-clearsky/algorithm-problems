/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result;
    
    for (var i = 0; i < nums.length; i++) {
      const searchNum = target - nums[i];
      const searchNumIndex = nums.indexOf(searchNum);
  
      if ( searchNumIndex > -1 && searchNumIndex !== i) {
        return [i, searchNumIndex]
      }
    }
    
    return []
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var start = 0;
    var len = nums.length;
    var sum = [];
    
    while (start < len - 1) {
        var end = start + 1;

        while (end < len) {
          if (nums[start] + nums[end] === target) {
              sum.push(start, end);
              return sum;
          }
          end++;
        }
        start++;
    }
    return sum;
};

// Tests
twoSum([3, 2, 4], 6)	// [1, 2]