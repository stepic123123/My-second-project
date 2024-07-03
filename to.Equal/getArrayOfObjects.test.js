function getArrayOfObjects() {
    return [{ name: 'John' }, { name: 'Jane' }];
  }

test('toEqual getArrayOfObjects', () => {
    expect(getArrayOfObjects()) 
    .toEqual ([{ name: 'John' }, { name: 'Jane' }]);
});