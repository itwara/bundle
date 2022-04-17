import assert from 'assert'
import { later } from '../../src/js/moduleA.js'

describe('hello', () => {
    it('没有参数，输出正常', () => {
       assert.strictEqual(later(), 'Later, undefined!')
    })
    it('有输入参数，输出正常', () => {
       assert.strictEqual(later('world'), 'Later, world!')
    })
})