const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let lengthX = matrix.length;
  let lengthY = matrix[0].length;
  let rezultMatrix = [];
  for (let i = 0; i < lengthX; i++) {
    rezultMatrix[i] = [];
    for (let j = 0; j < lengthY; j++) {
        let rezult = 0;
        if (i > 0 && matrix[i - 1][j] == true) {
            rezult++;
        }
        if (i > 0 && j < lengthY - 1 && matrix[i - 1][j + 1] == true) {
            rezult++;
        }
        if (j < lengthY - 1 && matrix[i][j + 1] == true) {
            rezult++;
        }
        if (i < lengthX - 1 && j < lengthY - 1 && matrix[i + 1][j + 1] == true) {
            rezult++;
        }
        if (i < lengthX - 1 && matrix[i + 1][j] == true) {
            rezult++;
        }
        if (i < lengthX - 1 && j > 0 && matrix[i + 1][j - 1] == true) {
            rezult++;
        }
        if (j > 0 && matrix[i][j - 1] == true) {
            rezult++;
        }
        if (i > 0 && j > 0 && matrix[i - 1][j - 1] == true) {
            rezult++;
        }
        rezultMatrix[i][j] = rezult;
    }
  }
  return rezultMatrix;
}

module.exports = {
  minesweeper
};
