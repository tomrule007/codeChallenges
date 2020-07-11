const { greet } = require('./helloWorld');
console.log(greet());
describe('greet', function () {
  test('is a function', () => {
    expect(typeof greet).toBe('function');
  });
  test('returns correct value', () => {
    expect(greet()).toBe('hello world!');
  });
});
