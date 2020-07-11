const { longestConsec, toLength } = require('./consecutiveStrings');

function testing(actual, expected) {
  expect(actual).toBe(expected);
}

describe('toLength', () => {
  it('returns length', () => {
    testing(toLength('tom'), 3);
    testing(toLength('is cool'), 7);
  });
});
describe('longestConsec', function () {
  it('Basic tests', function () {
    testing(
      longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
      'abigailtheta'
    );
    testing(
      longestConsec(
        [
          'ejjjjmmtthh',
          'zxxuueeg',
          'aanlljrrrxx',
          'dqqqaaabbb',
          'oocccffuucccjjjkkkjyyyeehh',
        ],
        1
      ),
      'oocccffuucccjjjkkkjyyyeehh'
    );
    testing(longestConsec([], 3), '');
    testing(
      longestConsec(
        [
          'itvayloxrp',
          'wkppqsztdkmvcuwvereiupccauycnjutlv',
          'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
        ],
        2
      ),
      'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
    );
    testing(
      longestConsec(
        ['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'],
        2
      ),
      'wlwsasphmxxowiaxujylentrklctozmymu'
    );
    testing(
      longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2),
      ''
    );
    testing(
      longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3),
      'ixoyx3452zzzzzzzzzzzz'
    );
    testing(
      longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15),
      ''
    );
    testing(
      longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0),
      ''
    );
  });
});
