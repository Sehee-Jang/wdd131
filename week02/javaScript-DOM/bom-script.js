const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    // Create a new list item element
    const li = document.createElement('li');

    // Populate the button textContent with a ❌
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    // Populate the li element variable's textContent with the input value
    li.textContent = input.value;

    // Append the delete button to the li element variable
    li.append(deleteButton);

    // Append the li element variable to the unordered list in your HTML
    list.append(li);
});

/* Add an event listener to the delete button that removes the li element when clicked. */
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();

    /* Change the input value to nothing or the empty string to clean up the interface for the user. */
    input.value = '';

    /* Regardless if a list item was created or not, the focus (active cursor) should be sent to the input element. */
    input.focus();
});

