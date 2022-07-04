function numberOfPlusPatterns(arrayArg) {
  let plusCount = 0
  arrayArg.forEach((subArray, idx1) => {
    subArray.forEach((char, idx2) => {
      //check if inside bounds and able to make a plus
      if(idx1 >= 1 && idx1 < arrayArg.length && idx2 >= 1 && idx2 < subArray.length) {
        if((arrayArg[idx1][idx2 - 1] == char) && (arrayArg[idx1 - 1][idx2] == char) && (arrayArg[idx1 + 1][idx2] == char) && (arrayArg[idx1][idx2 + 1] == char)) {
          plusCount++;
        }
      }
    })
  })
  return plusCount
}

module.exports = numberOfPlusPatterns;
