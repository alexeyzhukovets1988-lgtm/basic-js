const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    let hexArray = n.split('-');
    if (hexArray.length != 6) return false;
    const hexRegex = /^[0-9a-fA-F]+$/;
    let isMAC48Address = true;
    hexArray.forEach(element => {
        if (element.length != 2 || !hexRegex.test(element)) isMAC48Address = false;
    });
    return isMAC48Address;
}

module.exports = {
  isMAC48Address
};
