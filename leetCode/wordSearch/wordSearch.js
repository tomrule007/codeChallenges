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
    if (row < 0 || !board[row] || col < 0 || !board[row][col]) return;

    // Exit if character doesn't match
    const currentLetter = board[row][col];
    if (currentLetter !== word[path.size]) return;

    // Exit if already visited
    const pathString = `${currentLetter} (${row},${col})`;
    if (path.has(pathString)) return;

    // Current char is valid add to path.
    path.add(pathString);
    // Set valid answer if end of word and return
    if (word.length === path.size) {
      answers.push(path);
      return;
    }

    // Check next direction
    checkDirections(board, word, row - 1, col, new Set(path)); // up
    checkDirections(board, word, row + 1, col, new Set(path)); // down
    checkDirections(board, word, row, col - 1, new Set(path)); // left
    checkDirections(board, word, row, col + 1, new Set(path)); // right
  };

  // Find first character
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      const currentChar = board[row][col];
      if (currentChar === word[0]) {
        checkDirections(board, word, row, col);
      }
    }
  }
  return answers.length > 0;
};
module.exports = exist;
