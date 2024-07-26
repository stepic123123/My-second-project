function getNonEmptyString() {
    return 'Hello';
  }


test('getNonEmptyString', () => {
    expect(getNonEmptyString()) 
    .toBeTruthy ();
});