# diff-object-array

A javascript differencing implementation for array.

# Installation

```
npm install diff-object-array --save
```

# Examples

```
const diff = require('diff-object-array')

// for array with basic type
console.log(diff([1,2,3], [2,3,4])) 
// { arrayDeleted: [ 1 ], arrayAdded: [ 4 ] }

// for array with objects
console.log(diff([{id: 1}, {id: 2}, {id: 3}], [{id: 2}, {id: 3}, {id: 4}], 'id')) 
// { arrayDeleted: [ { id: 1 } ], arrayAdded: [ { id: 4 } ] }
```
