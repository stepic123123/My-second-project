function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

test('divides 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
});