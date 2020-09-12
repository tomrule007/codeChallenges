/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  // Helper functions
  const isClosingBracket = (bracket) => [')', ']', '}'].includes(bracket);
  const isOpenBracket = (bracket) => ['(', '[', '{'].includes(bracket);
  const isOddLength = ({ length }) => length % 2 === 1;
  const getMatchingOpen = (bracket) =>
    ({
      ')': '(',
      ']': '[',
      '}': '{',
    }[bracket]);

  // Easy out: odd character count
  if (isOddLength(s)) return false;

  const openBrackets = [];

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (isClosingBracket(bracket)) {
      if (openBrackets.pop() !== getMatchingOpen(bracket)) return false;
    } else if (isOpenBracket(bracket)) {
      openBrackets.push(bracket);
    } else {
      // invalid bracket character
      return false;
    }
  }
  return openBrackets.length === 0;
};

module.exports = isValid;
