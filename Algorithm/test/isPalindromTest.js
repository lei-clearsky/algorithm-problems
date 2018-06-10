var chai = require('chai');
var expect = chai.expect;

var isPalindromModule = require('../Easy/isPalindrom/solutions.js');

describe('isPalindrom solutions', function() {
  describe('isPalindrom', function() {
    it('should return trusy if the passed string is palindrom', function() {
      expect(isPalindromModule.isPalindrom('level')).to.be.true;
    });

    it('should return falsy if the passed string is not palindrom', function() {
      expect(isPalindromModule.isPalindrom('nope')).to.be.false;
      expect(isPalindromModule.isPalindrom('almostomla')).to.be.false;
    });

    it('should return trusy if passed string is palindrom and contains empty spaces', function() {
      expect(isPalindromModule.isPalindrom('race car')).to.be.true;
    });

    it('should return false if passed string is not palindrom and contains empty spaces', function() {
      expect(isPalindromModule.isPalindrom('not a palindrome')).to.be.false;
    });

    it('should return trusy if passed string is palindrom and contains special chars', function() {
      expect(isPalindromModule.isPalindrom('A man, a plan, a canal. Panama')).to.be.true;
      expect(isPalindromModule.isPalindrom('0_0 (: /-\ :) 0–0')).to.be.true;
    });

    it('should return falsy if passed string is not palindrom and contains special chars', function() {
      expect(isPalindromModule.isPalindrom('1 eye for of 1 eye.')).to.be.false;
    });
  });

  describe('isPalindromRecursion', function() {
    it('should return trusy if the passed string is palindrom', function() {
      expect(isPalindromModule.isPalindromRecursion('level')).to.be.true;
    });

    it('should return falsy if the passed string is not palindrom', function() {
      expect(isPalindromModule.isPalindromRecursion('nope')).to.be.false;
      expect(isPalindromModule.isPalindromRecursion('almostomla')).to.be.false;
    });

    it('should return trusy if passed string is palindrom and contains empty spaces', function() {
      expect(isPalindromModule.isPalindromRecursion('race car')).to.be.true;
    });

    it('should return false if passed string is not palindrom and contains empty spaces', function() {
      expect(isPalindromModule.isPalindromRecursion('not a palindrome')).to.be.false;
    });

    it('should return trusy if passed string is palindrom and contains special chars', function() {
      expect(isPalindromModule.isPalindromRecursion('A man, a plan, a canal. Panama')).to.be.true;
      expect(isPalindromModule.isPalindromRecursion('0_0 (: /-\ :) 0–0')).to.be.true;
    });

    it('should return falsy if passed string is not palindrom and contains special chars', function() {
      expect(isPalindromModule.isPalindromRecursion('1 eye for of 1 eye.')).to.be.false;
    });
  });

  describe('isPalindromeViaReversal', function() {
    it('should return trusy if the passed string is palindrom', function() {
      expect(isPalindromModule.isPalindromeViaReversal('level')).to.be.true;
    });

    it('should return falsy if the passed string is not palindrom', function() {
      expect(isPalindromModule.isPalindromeViaReversal('nope')).to.be.false;
      expect(isPalindromModule.isPalindromeViaReversal('almostomla')).to.be.false;
    });

    it('should return trusy if passed string is palindrom and contains empty spaces', function() {
      expect(isPalindromModule.isPalindromeViaReversal('race car')).to.be.true;
    });

    it('should return false if passed string is not palindrom and contains empty spaces', function() {
      expect(isPalindromModule.isPalindromeViaReversal('not a palindrome')).to.be.false;
    });

    it('should return trusy if passed string is palindrom and contains special chars', function() {
      expect(isPalindromModule.isPalindromeViaReversal('A man, a plan, a canal. Panama')).to.be.true;
      expect(isPalindromModule.isPalindromeViaReversal('0_0 (: /-\ :) 0–0')).to.be.true;
    });

    it('should return falsy if passed string is not palindrom and contains special chars', function() {
      expect(isPalindromModule.isPalindromeViaReversal('1 eye for of 1 eye.')).to.be.false;
    });
  });
});

