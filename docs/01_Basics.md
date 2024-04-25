# The Basics - Understanding the fundamentals of testing


- How to create and run unit tests

- AAA pattern (Arrange, Act, Assert)

- What to test, and how to organize tests

## Why do we test?

The idea is we can have tests we write one by one, then at the end we can run all the tests and ensure the project works instead of performing a bunch of manual tests

In this course we have three variations of the same app, all three versions will recreate the same end structure, just by different means

## Frontend 

We'll start by looking at the frontend, specifically src/Math.js

```
export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

```

The above add function is the first unit we'll test, a unit is just a term for a small bit of code that has a function, and we want to test that unit.

Vitest recommends placing the test files alongside the main file it will be testing in the same directory

To name the test file, using the following format:

math.test.js OR math.spec.js 

Either way is acceptable, vitest will auto-detect the testing file and execute the test scripts contained within 

To add a test, we need to first import it from vitest, there is a way to add it globally, in the package.json if you append another flag '--global' 

```
"test": "vitest --run --reporter --global verbose",
```

For now though we'll just import test

```
import { test } from 'vitest'
```

You can also use it, instead of test, they effectively do the same thing, use either:

```
import { it } from 'vitest';
import { add } from './math'

```

Inside the test function you provide a string as a first argument, which should be a concise message that explains what the test is checking, the second is a function to run on the desired code 

```
test('should summarize all num values within an array', () => {
    // inside the test function we specify the result
    const result = add([1, 2, 3]);
    // then we use a method call expect, and method chain the 
    // toBe to specify what the end result of calling add with 
    // the array [1, 2, 3]
    expect(result).toBe(6);
});
```