const addFive = require('./addFive');

test('Add 5 to 5 should return 10', () => {
    expect(addFive(5)).toBe(10);
});