//Function implementation
const assertEqual = function(a,b) {
    if (a === b) {
      console.log(`✅ Assertion Passed: ${a}  ===  ${b}`);
      // for emoji : crtl + cmd + space
    } else {
      console.log(`📌 Assertion Failed: ${a}  !==  ${b}`);
    }
  
  };

  const findKeyByValue = function(input, Value) {
    let arr = [];
    for (const key of Object.keys(input)) {
        if (input[key] === Value) {
            return key;
        }
    }
  };

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  module.exports = findKeyByValue;
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 