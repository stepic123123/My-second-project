function getFruits() {
    return ['apple', 'banana', 'orange'];
  }

  test('getFruits returns an array containing "banana', () => {
    expect(getFruits()).toContain('banana');
  });