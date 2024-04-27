import { expect, test, describe} from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe('validateStringNotEmpty()', () => {
    
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
});

describe('validateNumber()', () => {
    
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
})
