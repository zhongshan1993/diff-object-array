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
  let intersectionArray = intersectionWith(originArray, currentArray, isEqual);
  let deleteDifferArray = differenceWith(originArray, intersectionArray, isEqual);
  let addDifferArray = differenceWith(currentArray, intersectionArray, isEqual);
  return {
      arrayDeleted: deleteDifferArray,
      arrayAdded: addDifferArray
  };
}