const titleCase  = function(text) {
    text = text.toLowerCase();
    let newText = text.split(" ")
    let arr = [];
    if (text === "") {
      return ""
    }
    for (word of newText) {
      for (let j = 0; j < word.length; j++){
        //Camel = newText[i][0].toUpperCase() + newText[i].slice(1);   
      } 
      arr.push(word[0].toUpperCase() + word.slice(1)); 
    }
    return arr.join(" ")
          
  }
  
  const res = titleCase("What happens here")
  console.log(res)
