function greet(name) {
    return `Hello, ${name}!`;
  }
  
  test('adds Vadim to equal Hello, Vadim!', () => {
    expect(greet('Vadim')).toBe(`Hello, Vadim!`);
  });