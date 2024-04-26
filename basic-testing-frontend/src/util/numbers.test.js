import { expect, test } from "vitest";
import { transformToNumber } from "./numbers";

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