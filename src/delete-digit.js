const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let maxValue = 0;
    let valueString = n + '';
    for (let i = 0; i < valueString.length; i++) {
        let deletdigitStr = valueString;
        let str = deletdigitStr.slice(0, i) + deletdigitStr.slice(i + 1);
        if (Number(str) > maxValue) {
            maxValue = Number(str);
        }
    }
    return maxValue;
}

module.exports = {
  deleteDigit
};
