const tripletPermeations = function (arr) {
  // build all triplet permeation
  const triplets = [];
  for (let i = 0; i < arr.length; i++) {
    const first = [i, arr[i]];
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      const second = [j, arr[j]];
      for (let k = 0; k < arr.length; k++) {
        if (i === k || j === k) continue;
        const third = [k, arr[k]];
        triplets.push([first, second, third]);
      }
    }
  }
  return triplets;
};
const indexIsOrdered = (i, j, k) => i < j && j < k;
const isGoodTriplet = (a, b, c) => ([first, second, third]) => {
  if (
    Math.abs(first - second) <= a &&
    Math.abs(second - third) <= b &&
    Math.abs(first - third) <= c
  ) {
    return true;
  } else return false;
};

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  const isGoodTripletABC = isGoodTriplet(a, b, c);

  const validTriplets = tripletPermeations(arr).filter(
    ([[i, first], [j, second], [k, third]]) => {
      return (
        indexIsOrdered(i, j, k) && isGoodTripletABC([first, second, third])
      );
    }
  );
  return validTriplets.length;
};

module.exports = { countGoodTriplets, tripletPermeations, isGoodTriplet };
