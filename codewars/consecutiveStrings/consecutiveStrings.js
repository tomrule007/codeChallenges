const toLength = (str) => str.length;
const sum = (a, b) => a + b;
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';

  const consecutiveSums = strarr
    .map(toLength)
    .reduce(
      (consecutiveLengths, _cur, i, lengths) => [
        ...consecutiveLengths,
        lengths.slice(i, i + k).reduce(sum, 0),
      ],
      []
    );
  const indexOfMax = consecutiveSums.indexOf(Math.max(...consecutiveSums));
  return strarr.slice(indexOfMax, indexOfMax + k).join('');
}

module.exports = { longestConsec, toLength };
