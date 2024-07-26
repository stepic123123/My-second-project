function getPerson6() {
    return {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        country: 'USA',
      },
    };
  }

 

  test('Checking if an object returned by a function has a specific nested property with a specific value', () => {
    expect(getPerson6()).toHaveProperty('address.city','New York');
   });