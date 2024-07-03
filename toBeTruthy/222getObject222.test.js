function getObject() {
    return { name: 'John' };
  }

test('getObject', () => {
    expect( getObject()) 
    .toBeTruthy ();
});