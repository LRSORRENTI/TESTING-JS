# AAA (Arrange, Act, Assert)

The test we wrote in math.test.js:

```
import { test, expect } from 'vitest'
import { add } from './math.js'

test('should summarize all num values within an array', () => {
    const result = add([1, 2, 3]);
    expect(result).toBe(6);
});
```
This works, but there are some flaws, it's not following AAA

## Arrange 

Define the testing environemt and values 

## Act 

Perform the actual code / execute the testing function

## Assert 

Evaluate the produced value / result and compare it to the expected value / result

To improve the test:

```
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
```
```
 npm test

> basic-testing-frontend@1.0.0 test
> vitest --run --reporter verbose


 RUN  v0.9.0 /home/luke/Desktop/TESTING-JS/basic-testing-frontend

 √ src/math.test.js (1)
   √ should summarize all num values within an array

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  1.35s (in thread 3ms, 44879.51%)
```

The AAA pattern helps keep testing files organized and structured