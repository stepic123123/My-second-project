function getTrue() {
    return true;
  }

test('toBeTruthy getTrue', () => {
    expect(getTrue()) 
    .toBeTruthy ();

   });