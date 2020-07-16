/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let currentMatch = '';
  const firstStringLength = strs[0] ? strs[0].length : 0;
  for (let i = 0; i < firstStringLength; i++) {
    const char = strs[0][i];
    if (!strs.every((string) => string[i] === char)) break;
    currentMatch += char;
  }
  return currentMatch;
};

module.exports = longestCommonPrefix;
