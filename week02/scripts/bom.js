
console.log('Yes, we work!');

const input = document.querySelector('#favchap');
const button = document.querySelector('button'); // <- looks for the first button in the HTML
const list = document.querySelector('ul');

button.addEventListener('click', function() { // <- the Add Chapter button click event function block, apparently
    if (input.value.trim() !== '') { // trim() method removes whitespace 
        const li = document.createElement('li'); 
        const deleteButton = document.createElement('button');

        li.textContent = input.value; 
        deleteButton.textContent = '❌'; 
        li.append(deleteButton); 
        list.append(li);

        input.value = ''; // to clear the input field

        deleteButton.addEventListener('click', function () { // this is that X button
            list.removeChild(li);
            input.focus(); // highlights the input field again
        });

    } else {
        input.focus(); // the active cursor goes back to the input element 
    }

}); 