/**
 * arraysMatch
 * Takes two arrays and efficiently checks if they match: first by length, then by value.
 * @param {array} arr1
 * @param {array} arr2
 * @returns {boolean}
 */

export const arraysMatch = (arr1: Array<any>, arr2: Array<any>): boolean => {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) return false;

  // Check if all items exist and are in the same order
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  // Otherwise, return true
  return true;
};
