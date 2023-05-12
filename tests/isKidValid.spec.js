const isKidValidSpec = require('../src/isKidValid')

describe('Test isValidKid', () => {
    test("It should return false on empty input", () => {
        expect(isKidValidSpec("")).toBe(false)
    });
    test("It should return false on wrong input", () => {
        expect(isKidValidSpec("321654sad")).toBe(false)
    });
    test("It should return false on not valid kid number", () => {
        expect(isKidValidSpec("0114641212")).toBe(false)
    });
    test("It should return true when input is a valid kid number", () => {
        expect(isKidValidSpec("0114641202")).toBe(true)
    });
})
