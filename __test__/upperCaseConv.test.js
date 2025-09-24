const { upperCaseConv } = require('../upperCaseConv.js')

lowerCaseArg = "anteman-swe";
upperCaseArg = "ANTEMAN-SWE";
describe('upperCaseConv', () => {
    //
    test(`Should convert ${lowerCaseArg} to upper case`, () => {
        // Test if my function returns correct caps in output
        expect(upperCaseConv(lowerCaseArg)).toBe(upperCaseArg);
    });

    test('Function should be able to handle empty string also', () => {
        // Test if my function return empty string same as input
        expect(upperCaseConv("")).toBe("");
    });

    test('An Error should be thrown if input is not a string, ie 123', () => {
        // When using toThrow function execution must be little delayed by letting a function call the tested function
        expect(() => upperCaseConv(123)).toThrow('Input is not a string!');
    });
});