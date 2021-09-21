const assertEqual = function(a,b) {
    if (a === b) {
      console.log(`✅ Assertion Passed: ${a}  ===  ${b}`);
      // for emoji : crtl + cmd + space
    } else {
      console.log(`📌 Assertion Failed: ${a}  !==  ${b}`);
    }
  
  };

  const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }


    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
        }
      }
    return true;    
  }

const eqObjects = function (object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    } else {
      for (let key in object1) {
        if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
          if (eqArrays(object1[key], object2[key]) === false) {
            return false
          }
        } else {
          if (object1[key] !== object2[key]) {
            return false;
          }
        }
      }
      return true;
    }
  };

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
      console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);   
    } else {
      console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  }
   

//Test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true
  
const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false
  
assertEqual(assertObjectsEqual(ab, ba), true);
assertEqual(assertObjectsEqual(ab, abc), false);


module.exports = assertObjectsEqual;
