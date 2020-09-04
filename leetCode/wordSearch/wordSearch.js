/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = (board, word) => {
  const rowLen = board.length;
  const colLen = board[0].length;
  const answers = [];

  const checkDirections = (board, word, row, col, path = new Set()) => {
    // Exit if out of bounds
    if (row < 0 || !board[row] || col < 0 || !board[row][col]) return false;

    // Exit if character doesn't match
    const currentLetter = board[row][col];
    if (currentLetter !== word[path.size]) return false;

    // Exit if already visited
    const pathString = `${currentLetter} (${row},${col})`;
    if (path.has(pathString)) return false;

    // Current char is valid add to path.
    path.add(pathString);
    // Set valid answer if end of word and return false
    if (word.length === path.size) return true;

    // Check next direction
    return (
      checkDirections(board, word, row - 1, col, new Set(path)) || // up
      checkDirections(board, word, row + 1, col, new Set(path)) || // down
      checkDirections(board, word, row, col - 1, new Set(path)) || // left
      checkDirections(board, word, row, col + 1, new Set(path)) // right
    );
  };

  // Find first character
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      const currentChar = board[row][col];
      if (currentChar === word[0]) {
        if (checkDirections(board, word, row, col)) return true;
      }
    }
  }
  return false;
};
module.exports = exist;
