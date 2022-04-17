import assert from 'assert'
import moduleB from '../src/js/moduleB.js'

describe('moduleB', () => {
    it('没有参数，输出正常', () => {
       assert.strictEqual(moduleB(), '')
    })
    it('有输入参数，输出正常', () => {
       assert.strictEqual(moduleB([1, 2]), 3)
    })
})