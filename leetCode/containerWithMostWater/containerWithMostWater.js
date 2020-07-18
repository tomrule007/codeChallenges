/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let minHeight = Math.min(height[left], height[right]);
    let distance = right - left;
    max = Math.max(minHeight * distance, max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

module.exports = maxArea;
