function getPeople() {
    return [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Bob', age: 35 },
    ];
  }

test('Checking if an array of objects returned by a function contains a specific object', () => {
    expect(getPeople()).toContainEqual({ name: 'Bob', age: 35 });
  });