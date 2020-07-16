/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;
  let reversedNumber = 0;

  for (
    let number = Math.abs(x);
    number !== 0;
    number = Math.floor(number / 10)
  ) {
    reversedNumber = reversedNumber * 10 + (number % 10);
  }

  return reversedNumber + 1 > 2 ** 31
    ? 0
    : reversedNumber * (isNegative ? -1 : 1);
};

module.exports = reverse;
