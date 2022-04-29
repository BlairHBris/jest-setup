const { integerMath } = require('./index')

describe('integerMath function tests', () => {
    it('adds numbers', () => {
        const result = integerMath(1,2,'addition')
        expect(result).toEqual(3)
    })
    it('subtracts numbers', () => {
        const result = integerMath(1,2,'subtraction')
        expect(result).toEqual(-1)
    })
    it('multiplies numbers', () => {
        const result = integerMath(1,2,'multiplication')
        expect(result).toEqual(2)
    })
    it('divides numbers', () => {
        const result = integerMath(1,2,'division')
        expect(result).toEqual(.5)
    })
    it('finds the remainder for division between numbers', () => {
        const result = integerMath(5,2,'remainder')
        expect(result).toEqual(1)
    })
    it('finds the remainder for division between numbers, modulo', () => {
        const result = integerMath(5,2,'modulo')
        expect(result).toEqual(1)
    })
    it('performs exponentiation', () => {
        const result = integerMath(5,2,'exponentiation')
        expect(result).toEqual(25)
    })
    it('rounds the inputs to the nearest whole integers', () => {
        const result = integerMath(1.1,2.1,'addition')
        expect(result).toEqual(3)
    })
    it('rounds the inputs to the nearest whole integers', () => {
        const result = integerMath(1.9,2.9,'addition')
        expect(result).toEqual(5)
    })
})