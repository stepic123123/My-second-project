function sayHello() {
    return 'Hello';
  }

  test('there is a new flavor idea', () => {
    expect(sayHello()).toBeDefined();
  });

  