const longest = require('./longestCommonPrefix');

describe('longestCommonPrefix', () => {
  it('return empty string if there is no common', () => {
    const strings = ['dog', 'racecar', 'potato'];
    expect(longest(strings)).toBe('');
  });

  it('returns common prefix', () => {
    const strings = ['flower', 'flow', 'flight'];
    expect(longest(strings)).toBe('fl');
  });

  it('returns empty string if a given string is empty', () => {
    const strings = ['earn', 'ear', 'earl', ''];
    expect(longest(strings)).toBe('');
  });

  it('returns empty string when the array is empty', () => {
    const strings = [];
    expect(longest(strings)).toBe('');
  });
});
``;
