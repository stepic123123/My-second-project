function getNestedObject() {
    return { person: { name: 'John', age: 30 } };
  }

test('toEqual getNestedObject', () => {
    expect(getNestedObject()) 
    .toEqual ({person: { name: 'John', age: 30 }});
});