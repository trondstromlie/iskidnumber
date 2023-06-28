const {isKidValid} = require('../src/isKidValid')

describe('Test isValidKid', () => {
    test("It should return false on empty input", () => {
        expect(isKidValid("")).toBe(false)
    });
    test("It should return false on wrong input", () => {
        expect(isKidValid("321654sad")).toBe(false)
    });
    test("It should return false on not valid kid number", () => {
        expect(isKidValid("0114641212")).toBe(false)
    });
    test("It should return an error if the input is not a string", () => {
        expect(() => isKidValid(123)).toThrow("Parameter is not a string!")
    })
    test("It should return true when input is a valid kid number", () => {
        expect(isKidValid("0114641202")).toBe(true)
    });
})
