function getPerson1() {
    return {
      name: 'John',
      age: 30,
    };
  }

   test('Checking if an object returned by a function has a specific property', () => {
   expect(getPerson1()).toHaveProperty('name');
  });
  