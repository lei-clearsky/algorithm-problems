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

// Tests
twoSum([3, 2, 4], 6)	// [1, 2]
