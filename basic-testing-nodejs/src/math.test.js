import { test, expect } from 'vitest'
import { add } from './math.js'

// test('should summarize all num values within an array', () => {
    // inside the test function we specify the result
    // const result = add([1, 2, 3]);
    // then we use a method call expect, and method chain the 
    // toBe to specify what the end result of calling add with 
    // the array [1, 2, 3]
//     expect(result).toBe(6);
// });

// Refactored without hardcoded result expectation:
test('should summarize all num values within an array', () => {
    // Arrange phase
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((prevValue, currValue) => {
        return prevValue + currValue
    });

    // Act phase
    const result = add(numbers);

    // Assert phase
    expect(result).toBe(expectedResult);
});

test('should yield NaN if an invalid number is provided', () => {
    // Arrange
    const inputs = ['invalid', 1];
    // Act
    const result = add(inputs);
    // Assert 
    expect(result).toBeNaN();
});

test('should yield a correct sum if an array of numeric string values are provides', () => {
    const numbers = ['1', '2', '3'];
    const result = add(numbers);
    const expectedResult = numbers.reduce((acc, curr) => {
        // note we prepend '+' to convert string num to real
        // num
        return +acc + +curr
    });
    expect(result).toBe(expectedResult);
});

test('should yield 0 is an empty array is provides', () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
});

// testing for errors 
test('will check if no argument is passed in, throw error', () => {
    const resultFN = () => {
        add();
    };
    expect(resultFN).toThrow();
    // to check for the inverse, pass in the not method
    // expect(resultFN).not.toThrow();
});

test('will check if multiple arguments are passed in instead of an array', () => {
    const num1 = 1;
    const num2 = 2;
    const resultFN = () => {
        add(num1, num2)
    };
    expect(resultFN).toThrow(/is not iterable/);
    // The regular expression /is not iterable/ 
    // is used to specify the expected message or 
    // pattern in the error that should be thrown. 
    // This regex matches any error message that 
    // contains the phrase "is not iterable."
});