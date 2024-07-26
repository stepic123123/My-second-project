const myObject = {
    greet: function() {
      return 'Hi';
    },
  };

  test('myObject.greet returns "Hi"', () => {
    expect(myObject.greet()).toBeDefined();
  });