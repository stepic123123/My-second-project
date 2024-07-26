function getPerson5() {
    return {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        country: 'USA',
      },
    };
  }

  
  test('Checking if an object returned by a function has a specific nested property', () => {
    expect(getPerson5()).toHaveProperty('address.city');
   });