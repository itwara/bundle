import assert from 'assert'
import { hello } from '../../src/js/moduleA.js'

describe('hello', () => {
    it('没有参数，输出正常', () => {
       assert.strictEqual(hello(), 'Hello, undefined!')
    })
    it('有输入参数，输出正常', () => {
       assert.strictEqual(hello('world'), 'Hello, world!')
    })
})

