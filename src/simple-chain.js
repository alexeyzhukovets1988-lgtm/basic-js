const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  listLink: [],  
  getLength() {
    return this.listLink.length;
  },
  addLink(value) {
    this.listLink.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 0 || position >= this.getLength()) { return 'You can\'t remove incorrect link!'; } 
    this.listLink.splice(--position, 1);
    return this;
  },
  reverseChain() {
    this.listLink.reverse();
    return this;
  },
  finishChain() {
    let rezultString = '';
    for (let i = 0; i < this.listLink.length; i++) {
        if (i != this.listLink.length - 1) {
            rezultString += '( ' + this.listLink[i] + ' )' + '~~';
        } else {
            rezultString += '( ' + this.listLink[i] + ' )';
        }
    }
    return rezultString;
  },
};

module.exports = {
  chainMaker,
};
