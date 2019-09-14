/* ./test/index.js */

var solved = require('../solved');
var chai = require('chai'); // Only required for headless testing - "> mocha"
var assert = chai.assert;

describe('Test Dataset #1', function() {

  var meetings = [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 5},
    {startTime: 4, endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9, endTime: 10},
  ];
  console.log(`Meetings:\n`, meetings, `...\nMerges down to...\n`, solved( meetings ), `\n\n` )

  var mergedOutput = solved( meetings );

  it('The Merged Calendar has a .length of 3', function() {;
    assert.equal(mergedOutput.length, 3);
  });
  it('The last merged entry is 10 to 12', function() {
    var startTime = mergedOutput[2].startTime;
    var endTime   = mergedOutput[2].endTime;
    assert.equal(startTime, 10);
    assert.equal(endTime, 12);
  });
});
