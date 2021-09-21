const assertEqual = require('./assertEqual');


const tail = function(arr) {
  let tailedArray = arr.slice(1);
  return tailedArray;
};
   
  
module.exports = tail;



