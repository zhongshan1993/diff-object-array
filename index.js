const isObject = require('lodash.isobject');
const differenceWith = require('lodash.differencewith');
const intersectionWith = require('lodash.intersectionwith');

module.exports = function(oldArray, curArray, idKey = 'id') {
  let isEqual = (pre, next) => {
      if (isObject(pre)) {
          return pre[idKey] === next[idKey];
      } else {
          return pre === next;
      }
  };
  let intersectionArray = intersectionWith(oldArray, curArray, isEqual);
  let deleteDifferArray = differenceWith(oldArray, intersectionArray, isEqual);
  let addDifferArray = differenceWith(curArray, intersectionArray, isEqual);
  return {
      arrayDeleted: deleteDifferArray,
      arrayAdded: addDifferArray
  };
}