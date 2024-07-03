function getArray() {
    return [1, 2, 3];
  }

 
  test('toEqual getArray', () => {
    expect(getArray()) 
    .toEqual ([1, 2, 3]);
});