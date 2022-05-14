/***Importing our function (which we have assumed we will create in the future) to be tested from the app.js file to our test file. */
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { isTypedArray } = require('util/types');
const greet = require('./greet');

//Testing our greeting function on the functions described in the assignment
describe('Greeting ',() => {

    //Test 1 - check if the function returns Hello, Elizabeth if eLizabeth is passed into the function
    it('should return Hello, NAME', () => {
        const name = 'Elizabeth';
        expect(greet(name)).toBe('Hello, Elizabeth');
    });

    //Test 2 - Check if the function returns Hello there! if no parameter is injected
    it('should return Hello there!', () => {
        const name = '';
        expect(greet(name)).toBe('Hello there!');
    });

    //Test 3 - Check if function shouts back at you if all uppercase
    it('should shout back at you if name is all uppercase', () => {
        const name = 'ELIZABETH';
        expect(greet(name)).toBe('HELLO, ELIZABETH!');
    });

    //Test 4 - Check if an array of names can be greeted
    it('should greet back an array of names', () => {
        const name = ['Jose', 'Pep', 'Alex', 'Arsene'];
        expect(greet(name)).toBe('Hello, Jose, Pep, Alex, Arsene');

    });




})