/* ./test/index.js */

/* Answer Key */
const answerKey = [0, 1, 2];

var solved = require('../solved');
var chai = require('chai'); // Only required for headless testing - "> mocha"
var assert = chai.assert;

describe('Answer Key Validation', function() {
  it('answer key has a .length of XX', function() {;
    assert.equal(answerKey.length, 3);
  });
  it('last answer key elements is 2', function() {
    var answerKeyLastItem = answerKey[answerKey.length-1];
    assert.equal(answerKeyLastItem, 2);
  });
});

describe('Computed Answer Validation', function() {
  var output = -1 // solved(n)
  it('output is -1', function() {
    assert.equal(output, -1);
  });
});

