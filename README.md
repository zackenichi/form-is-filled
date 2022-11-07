# Getting Started with Create React App

This checks if all forms are filled and are not filled with spaces

## What is this for?

This project serves as a sample for frontend form input validation.
This is used for a React Bootcamp.

## What is the focus?

Everything else on this code is pretty basic. The important part to focus on would be these 2 function snippets:

### White-space detection

`const onlySpace = (txt) => {
    return txt.trim().length === 0;
  };`
  
 
 ### Default blank answer and string deletion

`const incomplete =
      formCopy.filter((ques) => {
        return (
          ques.answer === '' || ques.answer === null || onlySpace(ques.answer)
        );
      }).length > 0;`
      
### Form validation flag

` setFormComplete(!incomplete); `


### Explanation

We have used trim in the first snippet to remove all white spaces from the string. This function compares the length of newly created string and would return true if input is just made up of strings.

The second snippet uses a filter function to check the entire array for the blank answer placeholder or a deleted input - which should be undefined.

### Validation UX

We have just disabled the submit button for now but you can use the same logic to trigger something like an error message, submission prevention , snackbar or whatever you think is necessary.
