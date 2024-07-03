function addArrays(a, b) {
    return [...a, ...b];
  }


test('toEqual gddArrays', () => {
  expect(addArrays([1,2],[3,4])) 
    .toEqual ([1,2,3,4]);
});