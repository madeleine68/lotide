function sumToOne(n) {
  if (n === 1) {
    return 1;
    } 
  return sumToOne(n-1)+n;         
  }
  

console.log(sumToOne(6))  