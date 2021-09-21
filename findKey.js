//Function implementation
const assertEqual = function(a,b) {
    if (a === b) {
      console.log(`✅ Assertion Passed: ${a}  ===  ${b}`);
      // for emoji : crtl + cmd + space
    } else {
      console.log(`📌 Assertion Failed: ${a}  !==  ${b}`);
    }
  };

const findKey = function(obj, callback) {
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) {
        return key;
    } 
  } 
};

const results1 =findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"

  console.log(results1);


  module.exports = findKey;
