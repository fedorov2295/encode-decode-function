const { it, expect, describe } = require('@jest/globals')
const code = require('./index')

describe ('Тесты для функций encode', function() {
    it('Пустая строка', () => {
        expect(code.encode('')).toBe('')
    })
    it('Одна буква А, на выходе А', () => {
        expect(code.encode('А')).toBe('А')
    })
    it('ААА -> А3', () => {
        expect(code.encode('AAA')).toBe('A3')
    })
    it('AAAAABBITTTC -> A5B2IT3C', () => {
        expect(code.encode('AAAAABBITTTC')).toBe('A5B2IT3C')
    })
    it('AAAAABBDDDDDDDDDDD -> A5B2D11', () => {
        expect(code.encode('AAAAABBDDDDDDDDDDD')).toBe('A5B2D11')
    })
    it('ABCDEF -> ABCDEF', () => {
        expect(code.encode('ABCDEF')).toBe('ABCDEF')
    })
    it('AAAAAAABBBCDDDDDD -> A7B3CD6', () => {
        expect(code.encode('AAAAAAABBBCDDDDDD')).toBe('A7B3CD6')
    })
    it('AB -> AB', () => {
        expect(code.encode('AB')).toBe('AB')
    })
    it('AAAAAAAAAAA -> A11', () => {
        expect(code.encode('AAAAAAAAAAA')).toBe('A11')
    })
})


describe ('Тесты для функций decode', function() {
    it('Пустая строка', () => {
        expect(code.decode('')).toBe('')
    })
    it('Одна буква А, на выходе А', () => {
        expect(code.decode('А')).toBe('А')
    })
    it('А3 -> AAA', () => {
        expect(code.decode('A3')).toBe('AAA')
    })
    it('A5B2IT3C -> AAAAABBITTTC', () => {
        expect(code.decode('A5B2IT3C')).toBe('AAAAABBITTTC')
    })
    it('A5B2D11 -> AAAAABBDDDDDDDDDDD', () => {
        expect(code.decode('A5B2D11')).toBe('AAAAABBDDDDDDDDDDD')
    })
    it('ABCDEF -> ABCDEF', () => {
        expect(code.decode('ABCDEF')).toBe('ABCDEF')
    })
    it('A2A5B3CD6 -> AAAAAAABBBCDDDDDD', () => {
        expect(code.decode('A2A5B3CD6')).toBe('AAAAAAABBBCDDDDDD')
    })
    it('AB -> AB', () => {
        expect(code.decode('AB')).toBe('AB')
    })
    it('A11 -> AAAAAAAAAAA', () => {
        expect(code.decode('A11')).toBe('AAAAAAAAAAA')
    })
})