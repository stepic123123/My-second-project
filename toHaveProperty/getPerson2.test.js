function getPerson2() {
    return {
      name: 'John',
      age: 30,
    };
  }

   test('Checking if an object returned by a function has a specific property with a specific value', () => {
   expect(getPerson2()).toHaveProperty('name', 'John');
  });