const myLibrary =[];

function Book() {
  // the constructor
}

function addBookToLibrary() {
  // Obtain value of user input
  const bookTitle = document.querySelector('input').value;
  myLibrary.push(bookTitle);
  return myLibrary;
}


// Create event listener for submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
  console.log(addBookToLibrary());
});