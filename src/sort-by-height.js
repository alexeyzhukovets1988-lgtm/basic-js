const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let temporaryArr = [];
    let minus = new Map();
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        if (currentValue < 0) {
            minus.set(i, currentValue);
        } else { temporaryArr.push(currentValue); }
    }
    temporaryArr.sort(
        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }
    );
    minus.forEach((key, value) => temporaryArr.splice(value, 0, key));
    return temporaryArr;
}

module.exports = {
  sortByHeight
};
