# Running Tests 

To run the test, in the terminal execute the following command: 

```
npm test
```

> basic-testing-frontend@1.0.0 test
> vitest --run --reporter verbose

```
 RUN  v0.9.0 /home/luke/Desktop/TESTING-JS/basic-testing-frontend

 √ src/math.test.js (1)
   √ should summarize all num values within an array

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  2.53s (in thread 7ms, 36105.07%)
```

You can also set up the environemt to watch mode, similar to other watch modes typescript's tsc --watch for typescript auto-compilation to js, the tests will now execute on save, if we change the toBe to an incorrect value and save, it will auto run the tests and show a failure

```
AssertionError: expected 6 to be 5 // Object.is equality
 ❯ src/math.test.js:10:20
      8|     // toBe to specify what the end result of calling add with 
      9|     // the array [1, 2, 3]
     10|     expect(result).toBe(5);
       |                    ^
     11| });

  - Expected   5
  + Received   6

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

Test Files  1 failed (1)
     Tests  1 failed (1)
      Time  5ms


 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit

```