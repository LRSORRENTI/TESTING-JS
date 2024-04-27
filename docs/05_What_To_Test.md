# What To Test / What Not To Test

Knowing what code should & shouldn't be tested is important when structuring tests within an application. 

## MAIN RULE 

Your tests should only ever test your application code, **NEVER TEST ANY THIRD PARTY CODE**

Don't test browser API's, like trying to test if document.querySelector() is correctly returning what it needs to, don't test any native node.js packages.

Never write tests for code that you are not responsible for or don't have the ability to change.

### Writing Good Tests

We've already covered the AAA pattern, but there are other good test guidelines

- Follow the Arrange, Act, Assert pattern
- Only test one thing per unit, one feature; e.g. test input validation or test input transformation, be as granular as possible
- Focus on the essence of the unit you're testing, don't add verbosity and excess to a unit which does not require it
- Keep the amount of assertions / expect statements low 

