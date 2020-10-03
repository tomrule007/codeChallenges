/**
 * Starting in top left corner of input matrix going clockwise
 * unwind all the values of the input matrix into an array.
 * @param {Number[][]} matrix
 * @returns {Number[]}
 */

const spiralOrder = (matrix) => {
  const out = [];
  let m = 0;
  let n = 0;
  const limit = {
    left: 0, // n min
    right: matrix[0].length - 1, // n max
    up: 0, // m min
    down: matrix.length - 1, // m max
  };

  let debugStop = 0;
  while (
    (limit.left <= limit.right || limit.up <= limit.down) &&
    debugStop++ < 50
  ) {
    // Right (n++) to Right Limit (inc up limit)
    while (n < limit.right) {
      out.push(matrix[m][n++]);
    }
    limit.up++;
    // Down (m++) to down Limit (dec right limit)
    while (m < limit.down) {
      out.push(matrix[m++][n]);
    }
    limit.right--;
    // Left (n--) to Left Limit (dec down Limit)
    while (n > limit.left) {
      out.push(matrix[m][n--]);
    }
    limit.down--;
    // Up (m--) to up Limit (inc left limit)
    while (m > limit.up) {
      out.push(matrix[m--][n]);
    }
    limit.left++;
  }
  return out;
};

module.exports = spiralOrder;
