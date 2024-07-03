function getObject() {
    return { name: 'John', age: 30 };
  }

test('toEqual getObject', () => {
    expect(getObject())
    .toEqual ({ name: 'John', age: 30});
});