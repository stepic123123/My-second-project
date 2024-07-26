const functions = ['sayHello', 'sayGoodbye', 'greet'];

  test('returns an array containing String  contain this array greet', () => {
    expect(functions).toContain('greet');
  });