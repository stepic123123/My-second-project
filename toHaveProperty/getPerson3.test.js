function getPerson3() {
    return {
      name: 'John',
      age: 30,
      sayHello: function() {
        return 'Hello';
      },
    };
  }
  
  
  test('Checking if an object returned by a function has a specific method', () => {
      expect(getPerson3()).toHaveProperty('sayHello');
     });
     