const myLibrary =['ExampleBook1', 'ExampleBook2'];

function Book() {
  // the constructor
}

function addBookToLibrary() {
  // Obtain value of user input
  const bookTitle = document.querySelector('input').value;

  // Add user input to myLibrary array
  myLibrary.push(bookTitle);
  return myLibrary;
}

function displayBooks() {
  const cardDiv =  document.createElement('div');
  cardDiv.setAttribute('class', 'card');
  const bookTitleDiv = document.createElement('div');
  const cardsContainer = document.querySelector('.cards-container')
  
  for (let i = 0; i < myLibrary.length; i++) {
    const title = document.createTextNode(`${myLibrary[i]}`);
    bookTitleDiv.appendChild(title);
    cardDiv.appendChild(bookTitleDiv);

    cardsContainer.appendChild(cardDiv);
  }
}

// Create event listener for submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
  console.log(addBookToLibrary());
});

displayBooks();