const assert = require('assert')
const diff = require('../index')

describe('diff', function() {
  it('require this module returns a function', function() {
    assert(typeof diff === 'function', 'diff should be a function')
  })

  it('diff([1,2,3], [2,3,4]) === {arrayDeleted: [1], arrayAdded: [4]}', function() {
    assert.deepEqual(
      diff([1,2,3], [2,3,4]),
      {arrayDeleted: [1], arrayAdded: [4]}, 
      'should equal expected object'
    )
  })
})