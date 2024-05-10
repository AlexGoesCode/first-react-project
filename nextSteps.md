# Rick and morty

## Pagination

1. write some logic in functions `handleButtonClickPrev()` and `handleButtonClickNext()`  so when we are in page 1, we dont substract 1 when clicking on prev page button, and that we dont add +1 when we click in next

2. in the button element, use the property `disabled` to write some logic so the button prev is disabled when in page 1, and the same for next when in page 42.

3. Try to unify both `handleButtonClickPrev()` and `handleButtonClickNext()` under one sinlge function. That function should be called by the two buttons. Write some logic to find out, which button are we clicking (think about the use of the property value, and find it inside the event object everytime we click the button), and do the corresponding operation (either +1 or -1) according to that.

## Filter

1. Create a function that is triggered every time the user types (or clicks the search button, or both).

2. When calling the function, you have to see what the user types inside a console.log 

3. Use the value of what the user types as criteria to filter (using `.filter()` ) the array of characters, using the name attribute.

4. Do not forget to "normalise" both the user input and the value from the database

5. Put a console log that prints in the console the filtered array.

6. try to find a way to send the new filtered array to the CharactersGrid component

Plan B

1. Create a state variable to store the input typed by the user

2. in the handleSearch function, set the previously created state variable with the value of the users input

3. outside of any function (and not inside the return), create a variable that will store the result of filtering the array of characters , using the value of the state variable created.

4. pass that array of filtered elements to the grid