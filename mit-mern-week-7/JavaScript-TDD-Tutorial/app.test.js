/***Importing our function (which we have assumed we will create in the future) to be tested from the app.js file to our test file. */
const removeSNames = require('./app');

//Our Jest method containing multiple tests that define our objective
describe('removeSNames',() => {

    // Test 1 - names with 'S' sjhould not be present in the resultant array
    it('should remove all S names', () => {
        const names = ['Apple', 'Strawberry', 'Star fruit'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('Star fruit');
    });

    //Test 2 - names without 'S' should remain untouched
    it('should not remove other names' , () => {
        const names = ['Apple', 'Strawberry', 'Pineapple'];
        expect(removeSNames(names)).toContain('Apple');
        expect(removeSNames(names)).toContain('Pineapple');
    });

    //Test 3 - names with 'S' or 's' should not be present
    it('should not mind the case', () => {
        const names = ['Apple', 'Strawberry', 'PineApple', 'strawberry'];
        expect(removeSNames(names)).not.toContain('Strawberry');
        expect(removeSNames(names)).not.toContain('strawberry');
    });
});