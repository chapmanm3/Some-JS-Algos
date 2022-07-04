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

module.exports = areaOfRectangleContainingAllInstancesOfValue;
