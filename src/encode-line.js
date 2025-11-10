const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
     let rezultStr = '';
     let index = 1;
     let firstChar = str.charAt(0);
     for (let i = 1; i < str.length; i++) {
        let currentChar = str.charAt(i);
        if (firstChar == currentChar) {
            index++;
            firstChar = currentChar;
            if (i + 1 == str.length) {
                rezultStr += index + firstChar;
            }
        } else {
            if (index == 1) { 
                console.log(str.charAt(i));
                rezultStr += firstChar;
                firstChar = currentChar;
                if (i + 1 == str.length) {
                    rezultStr += firstChar;
                }
            } else {
                console.log(index + ' -> ' + str.charAt(i));
                rezultStr += index + firstChar;
                firstChar = currentChar;
                if (i + 1 == str.length) {
                    rezultStr += firstChar;
                }
            }
            index = 1;
        }
     }
     return rezultStr;
}

module.exports = {
  encodeLine
};
