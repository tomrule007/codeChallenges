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
var exist = function (board, word) {
  let answerFound = false;
  const visited = new Set();
  const rowLen = board.length;
  const colLen = board[0].length;

  // Find first character
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      const currentChar = board[row][col];
      if (currentChar === word[0]) {
        checkDirections(board, word, row, col, 0);
      }
    }
  }

  function checkDirections(board, word, row, col, currentMatchIndex) {
    //check visited
    const currentCell = row + ':' + col;
    if (visited.has(currentCell)) return;

    visited.add(currentCell);

    if (currentMatchIndex === word.length - 1) {
      answerFound = true;
    }

    const nextLetter = word[currentMatchIndex + 1];
    //check up
    const upRow = row - 1;
    if (upRow >= 0) {
      const nextMatch = board[upRow][col];
      if (nextLetter === nextMatch) {
        console.log('up match');
        checkDirections(board, word, upRow, col, currentMatchIndex + 1);
      }
    }
    //check down
    const downRow = row + 1;
    if (downRow < rowLen) {
      const nextMatch = board[downRow][col];
      if (nextLetter === board[downRow][col]) {
        checkDirections(board, word, downRow, col, currentMatchIndex + 1);
      }
    }
    //check left
    const leftCol = col - 1;
    if (leftCol >= 0) {
      if (nextLetter === board[row][leftCol]) {
        checkDirections(board, word, row, leftCol, currentMatchIndex + 1);
      }
    }
    //check right
    const rightCol = col + 1;
    if (rightCol < colLen) {
      if (nextLetter === board[row][rightCol]) {
        checkDirections(board, word, row, rightCol, currentMatchIndex + 1);
      }
    }
  }

  return answerFound;
};

module.exports = exist;
