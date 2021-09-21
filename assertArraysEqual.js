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

module.exports = assertArraysEqual;