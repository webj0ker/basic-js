const { NotImplementedError } = require('../extensions/index.js');

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
  return (n + '').split('').reduce((max, v) => {
    let current = +(n+'').replace(v, '');
    return current > max ? current : max;
  }, 0);

  
}

module.exports = {
  deleteDigit
};
