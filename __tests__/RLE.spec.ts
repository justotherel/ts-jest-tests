import { RLE } from '../sourse/RLE'

describe('RLE', () => {
    it('should input a string in a format of AB2C3', () => {
        expect(RLE('ABBCCC')).toEqual('AB2C3')
    })
})

describe('RLE', () => {
    it('should throw an error when passed a string containing any other symbols than capital latin letters', () => {
        expect(() => {RLE('123')})
        .toThrow(
            RangeError('Invalid string format, string sould contain only capital latin letters')
        )
    })
})
