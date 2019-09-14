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
  function mergeRanges(meetingsArray) {
    var mergedData = [
      { "startTime": meetingsArray[0].startTime, "endTime": meetingsArray[0].endTime }
    ];
    // console.log(`0. ${meetingsArray[0].startTime}`);
  
    // Merge meetings ranges
    for( var i=1; i<meetingsArray.length; i++) {
      // console.log(`${i}. ${meetingsArray[i].startTime}`);
      
      var startTime = meetingsArray[i].startTime;
      for( var j=0; j<mergedData.length; j++) {
        // Overlapping start/end of new meeting
        if (startTime >= mergedData[j].startTime && startTime <= mergedData[j].endTime ) {
          if( meetingsArray[i].endTime > mergedData[j].endTime ) {
            mergedData[j].endTime = meetingsArray[i].endTime; // Lengthen mergedRange
          }
        } else if (startTime >= mergedData[j].endTime ) {
          // Must be PAST current meeting
          if ( j+1==mergedData.length ) { // At last element, then ADD NEW
            mergedData.push( {
              "startTime": meetingsArray[i].startTime,
              "endTime":  meetingsArray[i].endTime,
            } )
          }
        }
      }
  
    }
    
  
    return mergedData;
  }  

  return mergeRanges(args[0]);
}
