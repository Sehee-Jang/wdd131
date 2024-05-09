buttonElement.addEventListener('click', function() {
    //Code to execute when the elemnet is clicked
    if (input.value.trim() !== '') {
        const input = document.querySelector('#favchap');
        const button = document.querySelector('#button');
        const list = document.querySelector('');
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
    }
});

/* Add an event listener to the delete button that removes the li element when clicked. */
deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
    
    /* Change the input value to nothing or the empty string to clean up the interface for the user. */
    input.value = '';

    /* Regardless if a list item was created or not, the focus (active cursor) should be sent to the input element. */
    input.focus();
});

