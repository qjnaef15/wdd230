const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  if (input.value !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';

    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = ''; // Clear the input field
    input.focus(); // Set focus back to the input field
  } else {
    // Provide a message or handle the empty input case as needed
    alert('Please enter a chapter.');
    input.focus();
  }
});
