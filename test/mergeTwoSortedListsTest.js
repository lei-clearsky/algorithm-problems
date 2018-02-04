var chai = require('chai');
var expect = chai.expect;

var mergeTwoSortedListsModule = require('../Easy/mergeTwoSortedLists/solutions.js');

function Node(val, next) {
  this.val = val;
  this.next = next;
};

describe('mergeTwoSortedLists solutions', function() {
  var L1, L2;

  var mn6 = new Node(10, null);
  var mn5 = new Node(9, mn6);
  var mn4 = new Node(6, mn5);
  var mn3 = new Node(5, mn4);
  var mn2 = new Node(3, mn3);
  var mn1 = new Node(1, mn2);
  var ML = mn1;

  beforeEach(function() {
    // create first linked list: 1 -> 3 -> 10
    var n3 = new Node(10, null);
    var n2 = new Node(3, n3);
    var n1 = new Node(1, n2);
    L1 = n1; 

    // create second linked list: 5 -> 6 -> 9
    var n6 = new Node(9, null);
    var n5 = new Node(6, n6);
    var n4 = new Node(5, n5);
    L2 = n4; 
  });

  it('should merge two sorted lists recursively', function() {
    expect(mergeTwoSortedListsModule.mergeTwoListsRecursion(L1, L2)).to.deep.equal(ML);
  })

  it('should merge two sorted lists iteratively', function() {
    expect(mergeTwoSortedListsModule.mergeTwoListsIterative(L1, L2)).to.deep.equal(ML);
  })
});
