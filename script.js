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
  const cardsOuterContainer = document.querySelector('.cards-outer-container');
  const cardsInnerContainer = document.querySelector('.cards-inner-container');
  const newCardsInnerContainer = document.createElement('div');
  newCardsInnerContainer.setAttribute('class', 'cards-inner-container');
  
  for (let i = 0; i < myLibrary.length; i++) {
    const title = document.createTextNode(`${myLibrary[i]}`);
    bookTitleDiv.appendChild(title);
    cardDiv.appendChild(bookTitleDiv);

    newCardsInnerContainer.appendChild(cardDiv);
  }
  cardsOuterContainer.replaceChild(newCardsInnerContainer, cardsInnerContainer);
}

// Create event listener for submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
  addBookToLibrary();
  displayBooks();
});

displayBooks();