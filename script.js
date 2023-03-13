// GLOBAL VARIABLES
const myLibrary =[];


// FUNCTION: Book constructor
function Book(title, author, pages, read) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// FUNCTION: Adds book to myLibrary array
function addBookToLibrary() {

  // Obtain value of user input
  const bookTitle = document.querySelector('input').value;

  // Add user input to myLibrary array
  myLibrary.push(bookTitle);
  return myLibrary;
}

// FUNCTION: Displays books onto page
function displayBooks() {
  const cardDiv =  document.createElement('div');
  cardDiv.setAttribute('class', 'card');
  const bookTitleDiv = document.createElement('div');
  const bookAuthorDiv = document.createElement('div');
  const bookPagesDiv = document.createElement('div');
  const bookReadDiv = document.createElement('div');
  const cardsOuterContainer = document.querySelector('.cards-outer-container');
  const cardsInnerContainer = document.querySelector('.cards-inner-container');
  const newCardsInnerContainer = document.createElement('div');
  newCardsInnerContainer.setAttribute('class', 'cards-inner-container');
  
  for (let i = 0; i < myLibrary.length; i += 1) {
    const title = document.createTextNode(`${myLibrary[i].title}`);
    const author = document.createTextNode(`${myLibrary[i].author}`);
    const pages = document.createTextNode(`${myLibrary[i].pages}`);
    const read = document.createTextNode(`${myLibrary[i].read}`);

    bookTitleDiv.appendChild(title);
    bookAuthorDiv.appendChild(author);
    bookPagesDiv.appendChild(pages);
    bookReadDiv.appendChild(read);

    cardDiv.appendChild(bookTitleDiv);
    cardDiv.appendChild(bookAuthorDiv);
    cardDiv.appendChild(bookPagesDiv);
    cardDiv.appendChild(bookReadDiv);

    newCardsInnerContainer.appendChild(cardDiv);
  }
  cardsOuterContainer.replaceChild(newCardsInnerContainer, cardsInnerContainer);
}

// Event listener for submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
  addBookToLibrary();
  displayBooks();
});

// Sample books
const sampleBook = new Book('Percy Jackson', 'Rick Riordan', 297, true);
myLibrary.push(sampleBook);
console.table(myLibrary);

// Display current books onto page
displayBooks();