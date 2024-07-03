const sayHello = () => 'Hello';
const sayGoodbye = () => 'Goodbye';
const greet = () => 'Hi';

const functions = [sayHello, sayGoodbye, greet];

test('Checking if an array of functions contains a specific function', () => {
    expect(functions).toContain(greet);
});