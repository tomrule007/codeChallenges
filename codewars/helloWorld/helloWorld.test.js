const { greet } = require('./helloWorld');
describe('greet', function () {
  test('is a function', () => {
    expect(typeof greet).toBe('function');
  });
  test('returns correct value', () => {
    expect(greet()).toBe('hello world!');
  });
});
