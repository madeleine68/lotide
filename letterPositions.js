const assertArraysEqual = function(arr1, arr2) {
    //check the length of arrays
    if (arr1.length !== arr2.length) {
        console.log("📌 Assertion Failed");
    }

    // compare elements of arrays
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log("📌 Assertion Failed");
        }
      }
    console.log("✅ Assertion Passed");    
  }

const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            if (results[sentence[i]]){
                results[sentence[i]].push(i);
            } else {
                results[sentence[i]] = [i];
            } 
        }
    }
    return results;
  };

///Test
  assertArraysEqual(letterPositions("hellol").e, [1]); 

 module.exports = letterPositions; 

