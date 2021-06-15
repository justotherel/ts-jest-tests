import { GETSUM } from '../sourse/GETSUM'

describe('GETSUM', () => {
    it('Should return the sum of digits in a string, ignoring any other char', () => {
        expect(GETSUM("6335051 xDDD")).toEqual(23)
    })
})
