/* ./index.js */

module.exports = function() {

  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);

  // Arguments should contain (finite) number values
  // if (!args.every(Number.isFinite)) {
  //   throw new TypeError('Expecting only numbers.')
  // }

  // Debugging assistance
  var sleep = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  // Use the "solution(xx)" function to return data for testing.
  var solution = function (input) {
    const MAX_IDX = input;
    var outputArray = [-1, input]; 

    return outputArray
  }

  return solution(args[0]);
}
