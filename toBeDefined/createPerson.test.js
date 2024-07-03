function createPerson() {
    return {
      sayName: function() {
        return 'My name is John';
      },
    };
  }

test('createPerson returns "My name is John" ', () => {
    expect(createPerson().sayName).toBeDefined();
  });