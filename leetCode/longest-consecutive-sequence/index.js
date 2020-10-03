/**
 *
 * @param {number[]} nums
 * @returns {number} longest consecutive count
 * @example [100, 4, 200, 1, 3, 2] -> 4
 */
const longestConsecutive = (nums) => {
  const consecutiveHash = {};
  let longest = 0;

  nums.forEach((num) => {
    if (consecutiveHash[num] === undefined) {
      const current = (consecutiveHash[num] = {
        top: { num },
        bottom: { num },
      });

      // Look up
      const above = consecutiveHash[num + 1];
      if (above !== undefined) {
        above.bottom.num = current.bottom.num;
        current.bottom = above.bottom;
        current.top = above.top;
      }

      // Look down
      const below = consecutiveHash[num - 1];
      if (below !== undefined) {
        below.top = current.top;
        current.bottom.num = below.bottom.num;
      }

      longest = Math.max(current.top.num - current.bottom.num + 1, longest);
    }
  });
  return longest;
};
module.exports = longestConsecutive;
