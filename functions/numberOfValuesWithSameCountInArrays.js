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

module.exports = numberOfValuesWithSameCountInArrays;
