var chai = require('chai');
var expect = chai.expect;

var maximumSubarrayModule = require('../Easy/maximumSubarray/solution.js');

var arrayA = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var arrayB = [4, -1, 2, 1, -5, 4, 8, 2, 1];
var arrayC = [-1, -5, -9, -3, -2, -1];
var resultNumA = 6;
var resultArrA = [4, -1, 2, 1];
var resultNumB = 16;
var resultArrB = [4, -1, 2, 1, -5, 4, 8, 2, 1];
var resultNumC = -1;
var resultArrC = [-1];

describe('maxSubArray solutions', function() {
  describe('maxSubArrayA', function() {
    it('should return max sum of contiguious subarray', function() {
      expect(maximumSubarrayModule.maxSubArrayA(arrayA)).to.equal(resultNumA);
      expect(maximumSubarrayModule.maxSubArrayA(arrayB)).to.equal(resultNumB);
    });

    it('should return the number if array has only one number', function() {
      expect(maximumSubarrayModule.maxSubArrayA([5])).to.equal(5);
    });

    it('should handle array with all negative numbers', function() {
      expect(maximumSubarrayModule.maxSubArrayA(arrayC)).to.equal(resultNumC);
    })
  });

  describe('maxSubArrayB', function() {
    it('should return max sum of contiguious subarray', function() {
      expect(maximumSubarrayModule.maxSubArrayB(arrayA)).to.equal(resultNumA);
      expect(maximumSubarrayModule.maxSubArrayB(arrayB)).to.equal(resultNumB);
    });

    it('should return the number if array has only one number', function() {
      expect(maximumSubarrayModule.maxSubArrayB([5])).to.equal(5);
    });
  });

  describe('arrayMaxSubArray', function() {
    it('should return contiguous subarray with max sum', function() {
      expect(maximumSubarrayModule.arrayMaxSubArray(arrayA)).to.deep.equal(resultArrA);
      expect(maximumSubarrayModule.arrayMaxSubArray(arrayB)).to.deep.equal(resultArrB);
    });

    it('should return the array if array only has one number', function() {
      expect(maximumSubarrayModule.arrayMaxSubArray([5])).to.deep.equal([5]);      
    });

    it('should handle array with all negative numbers', function() {
      expect(maximumSubarrayModule.arrayMaxSubArray(arrayC)).to.deep.equal(resultArrC);
    })
  });
});
