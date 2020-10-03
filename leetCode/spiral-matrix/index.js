/**
 * Starting in top left corner of input matrix going clockwise
 * unwind all the values of the input matrix into an array.
 * @param {Number[][]} matrix
 * @returns {Number[]}
 */
const spiralOrder = (matrix) => {
  const remainingInput = matrix.map((row) => [...row]);
  const output = [];
  let sides = ['TOP', 'RIGHT', 'BOTTOM', 'LEFT'];
  let sidePointer = 0;
  while (remainingInput.length > 0 && remainingInput[0].length > 0) {
    let slice = [];
    switch (sides[sidePointer]) {
      case 'TOP':
        slice = remainingInput.shift();
        break;

      case 'RIGHT':
        slice = remainingInput.reduce(
          (selection, row) => [...selection, row.pop()],
          []
        );
        break;

      case 'BOTTOM':
        remainingInput[remainingInput.length - 1].reverse();
        slice = remainingInput.pop();
        break;

      case 'LEFT':
        slice = remainingInput.reduce(
          (selection, row) => [...selection, row.shift()],
          []
        );
        slice.reverse();
        break;
      default:
        throw Error('INVALID Side: ', sides[sidePointer]);
    }
    output.push(...slice);
    sidePointer = (sidePointer + 1) % 4;
  }
  return output;
};

module.exports = spiralOrder;
