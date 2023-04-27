const form = document.querySelector('form');
const input = document.querySelector('input');
const response = document.querySelector('#response');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission behavior
  
  const data = new FormData();
  data.append('string', input.value); // add the user's input to the FormData object
  
  fetch('/length', { // send a POST request to the '/length' route
    method: 'POST',
    body: data
  })
  .then(response => response.text()) // extract the response text
  .then(text => {
    response.textContent = text; // display the response in the 'response' element
  })
  .catch(error => {
    console.error(error);
  });
});
