const tripletOrderedCombinations = function (arr) {
  // build all triplet permeation
  const triplets = [];
  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const second = arr[j];
      for (let k = j + 1; k < arr.length; k++) {
        const third = arr[k];
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

  const validTriplets = tripletOrderedCombinations(arr).filter((triplet) => {
    return isGoodTripletABC(triplet);
  });
  return validTriplets.length;
};

module.exports = {
  countGoodTriplets,
  tripletOrderedCombinations,
  isGoodTriplet,
};
