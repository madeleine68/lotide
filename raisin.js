const raisinAlarmArray = function(arr) {
    let result = [];
    for (let ing of arr) {
      // console.log("ing = " + ing);
      if (ing.includes("🍇")) {
        result.push("Raisin alert");
      } else {
        result.push("All Good!");
      }
    }
    return result;
  };

  console.log(raisinAlarmArray(
    [
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"]
    ]
  ));