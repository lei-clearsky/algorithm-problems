var chai = require('chai');
var expect = chai.expect;

var maximumSubarrayModule = require('../Easy/maximumSubarray/solution.js');

var arrayA = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var arrayB = [4, -1, 2, 1, -5, 4, 8, 2, 1];
var resultNumA = 6;
var resultArrA = [4, -1, 2, 1];
var resultNumB = 16;
var resultArrB = [4, -1, 2, 1, -5, 4, 8, 2, 1];

describe('maxSubArray solutions', function() {
  describe('maxSubArray', function() {
    it('should return max sum of contiguious subarray', function() {
      expect(maximumSubarrayModule.maxSubArray(arrayA)).to.equal(resultNumA);
      expect(maximumSubarrayModule.maxSubArray(arrayB)).to.equal(resultNumB);
    });
  });

  describe('arrayMaxSubArray', function() {
    it('should return contiguous subarray with max sum', function() {
      expect(maximumSubarrayModule.arrayMaxSubArray(arrayA)).to.deep.equal(resultArrA);
      expect(maximumSubarrayModule.arrayMaxSubArray(arrayB)).to.deep.equal(resultArrB);
    });
  });
});
