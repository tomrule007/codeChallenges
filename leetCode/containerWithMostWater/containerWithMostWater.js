/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  return Math.max(
    ...height.map((startHeight, startIndex) => {
      return Math.max(
        ...height.map((endHeight, endIndex) => {
          const minHeight = startHeight > endHeight ? endHeight : startHeight;
          const distance = Math.abs(startIndex - endIndex);
          return minHeight * distance;
        })
      );
    })
  );
};

module.exports = maxArea;
