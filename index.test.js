const areaOfRectangleContainingAllInstancesOfValue = require('./functions/areaOfRectangleContainingAllInstancesOfValue');
const numberOfPlusPatterns = require('./functions/numberOfPlusPatterns');
const numberOfValuesWithSameCountInArrays = require('./functions/numberOfValuesWithSameCountInArrays');

test('tests func', () => {
  const testArr = [['a', 'b', 'c', 'd', 'a'],
                  ['b', 'c', 'x', 'b', 'e']]
  const val = 'a'
  expect(areaOfRectangleContainingAllInstancesOfValue(testArr, val)).toBe(5)
})

test('tests func 2', () => {
  const testArr = [['a', 'b', 'c', 'd', 'b'],
                  ['b', 'a', 'x', 'b', 'e']]
  const val = 'a'
  expect(areaOfRectangleContainingAllInstancesOfValue(testArr, val)).toBe(4)
})

test('tests func 3', () => {
  const testArr = [['a', 'b', 'c', 'd', 'b'],
                  ['b', 'a', 'x', 'b', 'e'],
                  ['b', 'a', 'x', 'b', 'e']]
  const val = 'a'
  expect(areaOfRectangleContainingAllInstancesOfValue(testArr, val)).toBe(6)
})


//Number of Plus Patterns
test('Number of Plus Patterns', () => {
  const testArr = [[2, 1, 2],
                  [1, 1, 1],
                  [5, 1, 6]];
  expect(numberOfPlusPatterns(testArr)).toBe(1)
})

test('Number of Plus Patterns 2', () => {
  const testArr = [[2, 1, 2, 2, 1, 2],
                  [1, 1, 1, 1, 1, 1],
                  [5, 1, 6, 4, 1, 6]];
  expect(numberOfPlusPatterns(testArr)).toBe(2)
})

//Number Of Values With Same Count In Arrays
test('Number of Values with Same Count in Arrays', () => {
  const testArrA = [1, 2, 3, 3, 4];
  const testArrB = [1, 2, 1, 4, 4, 3, 3];

  expect(numberOfValuesWithSameCountInArrays(testArrA, testArrB)).toBe(2)
})

test('Number of Values with Same Count in Arrays 2', () => {
  const testArrA = [1, 2, 3, 3, 4, 4, 12, 12, 1];
  const testArrB = [1, 2, 1, 4, 4, 3, 3, 12, 6, 12];

  expect(numberOfValuesWithSameCountInArrays(testArrA, testArrB)).toBe(5)
})
