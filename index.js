function areaOfRectangleContainingAllInstancesOfValue(arrayArg, value) {
  
  /*
   * [ 
*      [a, b, c, d, a ],
*      [b, c, x, b, e ]
*    ] value = a area is 1 x 5 aka 5 | value = c area is 2 x 2 aka 4
   *
   */
  let coords = []
  let firstInstance = []
  let calcArea = 0;
  let xDif = 1;
  let yDif = 1;
  arrayArg.forEach((array, idx1) => {
    array.forEach((char, idx2) => {
      if(char == value){
        if(firstInstance.length == 0){
          calcArea = 1
          firstInstance = [idx1 + 1, idx2 + 1]
        }else{
          if(idx1 + 1 > yDif)
            yDif = idx1 + 1
          if(idx2 + 1 > xDif)
            xDif = idx2 + 1
          calcArea = xDif * yDif
        }
      }
    })
  })
  
  return calcArea

};

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

function numberOfValuesWithSameCountInArrays(arrayA, arrayB) {
  let returnCount = 0;
  let countObj = {
    a: {},
    b: {}
  }

  arrayA.forEach((val) => {
    if(countObj.a[val]){
      countObj.a[val]++
    }else{
      countObj.a[val] = 1
    }
  })

  arrayB.forEach((val) => {
    if(countObj.b[val]){
      countObj.b[val]++
    }else{
      countObj.b[val] = 1
    }
  })

  for(let char in countObj.a) {
    if(countObj.b[char] && countObj.b[char] === countObj.a[char]){
      returnCount++; 
    }
  }

  return returnCount
}

module.exports = {
  areaOfRectangleContainingAllInstancesOfValue,
  numberOfPlusPatterns,
  numberOfValuesWithSameCountInArrays
};
