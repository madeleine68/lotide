//Function implementation
const assertEqual = function(a,b) {
    if (a === b) {
      console.log(`✅ Assertion Passed: ${a}  ===  ${b}`);
      // for emoji : crtl + cmd + space
    } else {
      console.log(`📌 Assertion Failed: ${a}  !==  ${b}`);
    }
  
  };


 const countLetters = function (str) {
     let result = {};
     for (const letter of str) {
       if (result[letter]) {
           result[letter] += 1;
       } else {
           result[letter] = 1;
       }
     }
    return result
 }
 
 const res = countLetters("hjklahjkk fghl.");
 console.log(res);

 module.exports = countLetters;