function getPerson() {
    return {
      sayHello: () => 'Hello',
      sayGoodbye: () => 'Goodbye',
    };
  }

   test('Checking if an object returned by a function contains a specific method ', () => {
    expect(Object.keys(getPerson())).toContain('sayHello');
  });