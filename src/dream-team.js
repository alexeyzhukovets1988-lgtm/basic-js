const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) {
      return false;
    }
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        members[i] = members[i].trim();
      }
    }
    let dreamTeam = '';
    let isString = false;
    for (let member of members) {
      if (typeof member === 'string') {
        isString = true;
        dreamTeam += member.charAt(0).toUpperCase();
      }
    }
    if (!isString) {
      return false;
    }
    return dreamTeam.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
