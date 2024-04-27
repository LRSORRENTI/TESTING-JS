import { expect, test } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

test("should verify the input string is not empty", () => {
    // Arrange
    const value = 'not empty';

    const expectedResult = true;
    // Act
    const result = validateStringNotEmpty(value);
    // Assert
    expect(result).toBe(expectedResult);
    // Or 
    // expect(result).toBeTypeOf('number');
});

test("Should throw an error if a non-numeric value is provided", () => {
    const input = '1';
    function validationFn(){
        validateNumber(input);
    };
    expect(validationFn).toThrow();
});

test('should NOT throw an error if a number is provided', () => {
    const input = 1;
    function validationFn(){
        validateNumber(input)
    };
    expect(validationFn).not.toThrow();
});