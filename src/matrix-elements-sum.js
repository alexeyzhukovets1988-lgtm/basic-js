const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let sum = 0;
    matrix[0].forEach(elem => sum = sum + elem);
    const arrayCount = matrix.length;
    const elemCount = matrix[0].length;
    if (arrayCount == 1) {
        return sum;
    }
    for (let i = 1; i < arrayCount; i++) {
        for (let j = 0; j < elemCount; j++) {
            if (matrix[i - 1][j] == 0) continue;
            sum += matrix[i][j];
        }
    }
   return sum;
}

module.exports = {
  getMatrixElementsSum
};
