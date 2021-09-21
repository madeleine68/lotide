const map = function (arr, callback){
  const newArr = [];  
  for (item of arr) {
    newArr.push(callback(item));
  }
  return newArr;  
}

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


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0])
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])


module.exports = map;

