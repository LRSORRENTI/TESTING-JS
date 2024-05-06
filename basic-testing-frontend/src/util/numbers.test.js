import { describe, expect, test } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe('transformToNumber()', () => {
    test("should receive a number in a format '10' and return the number value of the string", () => {
        // Arrange
        const value = '10';
        const expectedResult = 10;
        // Act
        const result = transformToNumber(value);
        // Assert
        expect(result).toBe(expectedResult);
        // Or 
        // expect(result).toBeTypeOf('number');
    });
    
    test('should return NaN if an invalid string is provides', () => {
        // Arrange 
        const value = 'ten';
        // Act
        const result = transformToNumber(value);
        // Assert
        expect(result).toBeNaN();
    });
});

describe('cleanNumbers()', () => {
    test('should return an array if number values if an array of stirng number values is provided')
    const numberValues = ['1', '2', '3'];

    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toBeTypeOf('number');
});
