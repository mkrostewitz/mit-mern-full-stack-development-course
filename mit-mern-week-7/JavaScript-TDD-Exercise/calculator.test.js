/***Importing our function (which we have assumed we will create in the future) to be tested from the app.js file to our test file. */
const calculate = require('./calculator');

//Our Jest method containing multiple tests that define our objective
describe('calculate',() => { 

    // Test 1 - should add numbers
    it('should add numbers', () => {
        const numbers = [7, 8, 5];
        const mode = '+';
        expect(calculate(mode, numbers)).toBe(20);
    });

    // Test 2 - it should subtract numbers
    it('should subtract numbers', () => {
        const numbers = [20 , 8 , 7];
        const mode = '-';
        expect(calculate(mode, numbers)).toBe(5);
    });

    // Test 3 - it should multiply numbers
    it('should multiply numbers', () => {
        const numbers = [2 , 2 , 4];
        const mode = '*';
        expect(calculate(mode, numbers)).toBe(16);
    });

    // Test 4 - it should divide numbers
    it('should divide numbers', () => {
        const numbers = [25 , 5];
        const mode = '/';
        expect(calculate(mode, numbers)).toBe(5);
    });
});