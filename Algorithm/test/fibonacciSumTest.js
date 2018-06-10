var chai = require('chai');
var expect = chai.expect;

var fibonacciSumModule = require('../Easy/fibonacciSum/solutions.js');

describe('fibonacciSum solutions', function() {
  var resultA = 1;
  var resultB = 34;
  var resultC = 89;

  describe('fibonacciSum', function() {
    it('should generate expected fibonacci sum if number is less than 2', function() {
      expect(fibonacciSumModule.fibonacciSum(1)).to.equal(resultA);
    });
    it('should generate expected fibonacci sum if number is larger than 2', function() {
      expect(fibonacciSumModule.fibonacciSum(9)).to.equal(resultB);
      expect(fibonacciSumModule.fibonacciSum(11)).to.equal(resultC);
    })
  });

  describe('fibonacciSumRecursion', function() {
    it('should generate expected fibonacci sum if number is less than 2', function() {
      expect(fibonacciSumModule.fibonacciSumRecursion(1)).to.equal(resultA);
    });
    it('should generate expected fibonacci sum if number is larger than 2', function() {
      expect(fibonacciSumModule.fibonacciSumRecursion(9)).to.equal(resultB);
      expect(fibonacciSumModule.fibonacciSumRecursion(11)).to.equal(resultC);
    })
  });

  describe('fibonacciSumMemorization', function() {
    it('should generate expected fibonacci sum if number is less than 2', function() {
      expect(fibonacciSumModule.fibonacciSumMemorization(1)).to.equal(resultA);
    });
    it('should generate expected fibonacci sum if number is larger than 2', function() {
      expect(fibonacciSumModule.fibonacciSumMemorization(9)).to.equal(resultB);
      expect(fibonacciSumModule.fibonacciSumMemorization(11)).to.equal(resultC);
    })
  });
});