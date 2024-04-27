# Describe

The describe testing function helps clarify the unit which you're testing, a good way to use describe is to take the name of the function you're testing, and as a second argument you put all the tests that belong to a given unit

```
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

```