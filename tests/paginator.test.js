const assert = require('assert');
const data = require('./__mocks__/data');
const { paginate, calculateLimitAndOffset} = require('../index');

describe('Paginator', () => {
  it('should calculate limit and offset', done => {
    const { limit, offset } = calculateLimitAndOffset(2, 10)
    assert.equal(limit, 10)
    assert.equal(offset, 10)
    done()
  })
  it('should paginate an array and return pagination info', done => {
    const count = data.length
    const { limit, offset } = calculateLimitAndOffset(2)
    const rows = data.slice(offset, offset + limit)
    const meta = paginate(2, count, rows)
    console.log(meta)
    assert.equal(meta.count, 100)
    assert.equal(meta.currentPage, 2)
    assert.equal(meta.pageSize, 20)
    assert.equal(meta.pageCount, 5)
    done()
  })
})
