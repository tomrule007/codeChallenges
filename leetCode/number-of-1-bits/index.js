/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // This solution will only work for 32bit numbers 2^32 - 1
  let counterMask = 1;
  let totalOnes = 0;
  do {
    if (n & counterMask) totalOnes++;
  } while ((counterMask <<= 1));

  return totalOnes;
};

module.exports = hammingWeight;
