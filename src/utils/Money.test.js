import{it,expect,describe} from 'vitest'
import {formatMoney} from "./Money"

describe('formatMoney',()=>{
 it('formats 19999 cents as $19.99',()=>{
    expect(formatMoney(1999)).toBe('$19.99')
})

it('display 2 decimals',()=>{
    expect(formatMoney(1090)).toBe('$10.90')
})
})

