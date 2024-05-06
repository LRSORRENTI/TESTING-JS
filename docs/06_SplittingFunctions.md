# Splitting Functions

A common best practice is to modularize your large functions to make testing and debugging easier, take a look at:

```
function formSubmitHandler(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  let result = '';
  
  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  let resultText = '';

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }

  output.textContent = resultText;
}
```

Let's split this large function into smaller, easier to test functions 

```

```