const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

// Given word = "ABCCED", return true
// Given word = "SEE", return true
// Given word = "ABCB", return false

// Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

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
    console.log({ row, col });
    // Exit if out of bounds
    if (row < 0 || row >= rowLen || col < 0 || col >= colLen) {
      console.log('Out of Bounds');
      return;
    }

    // Exit if character doesn't match
    const currentLetter = board[row][col];

    if (currentLetter !== word[path.size]) {
      console.log("Characters doesn't match", {
        currentLetter,
        charToMatch: word[path.size],
      });
      return;
    }

    // Exit if already visited
    const pathString = `Board[${row}][${col}] = ${currentLetter}`;
    if (path.has(pathString)) {
      console.log('Already visited');
      return;
    }

    // Current char is valid add to path.
    console.log('valid Move', { pathString });
    path.add(pathString);
    // Set valid answer if end of word and return
    if (word.length === path.size) {
      console.log('Answer Found:', path);
      answers.push(path);
      return;
    }

    // Check next direction
    console.log({ row, col }, 'up');
    checkDirections(board, word, row - 1, col, new Set(path)); // up
    console.log({ row, col }, 'down');
    checkDirections(board, word, row + 1, col, new Set(path)); // down
    console.log({ row, col }, 'left');
    checkDirections(board, word, row, col - 1, new Set(path)); // left
    console.log({ row, col }, 'right');
    checkDirections(board, word, row, col + 1, new Set(path)); // right
  };

  // Find first character
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      const currentChar = board[row][col];
      if (currentChar === word[0]) {
        console.log('First Char', { row, col });
        checkDirections(board, word, row, col);
      }
    }
  }
  console.log(answers);
  return answers.length > 0;
};
module.exports = exist;
