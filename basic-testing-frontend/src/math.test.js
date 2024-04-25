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