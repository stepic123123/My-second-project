function getArray() {
    return [1, 2, 3];
  }

test('getArray', () => {
    expect(getArray()) 
    .toBeTruthy ();
});