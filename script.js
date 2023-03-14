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
  const bookTitle = document.querySelector('#book-title').value;
  const bookAuthor = document.querySelector('#book-author').value;
  const bookPages = document.querySelector('#book-pages').value;
  const bookReadBoolean = document.querySelector('#book-read').checked;
  let bookRead = null;

  if (bookReadBoolean === true) {
    bookRead = 'yes';
  } else {
    bookRead = 'no';
  }

  // Create new Book object to store user input
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(newBook);
  return console.table(myLibrary);
}

// FUNCTION: Displays books onto page
function displayBooks() {
  const numberOfBooks = myLibrary.length;

  for (let i = numberOfBooks - 1; i < myLibrary.length; i += 1) {
    const cardDiv =  document.createElement('div');
    cardDiv.setAttribute('class', 'card');
    const bookTitleDiv = document.createElement('div');
    const bookAuthorDiv = document.createElement('div');
    const bookPagesDiv = document.createElement('div');
    const bookReadDiv = document.createElement('div');
    const cardsInnerContainer = document.querySelector('.cards-inner-container');

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

    cardsInnerContainer.appendChild(cardDiv);
  }
}

// FUNCTION: turns off overlay
function overlayOff() {
  const overlay = document.querySelector('.overlay');
  overlay.style.opacity = '0';
}
// FUNCTION: turns on overlay
function overlayOn() {
  const overlay = document.querySelector('.overlay');
  overlay.style.opacity = '50%';
}

// BUTTON ('NEW BOOK'): open modal
const newBookButton = document.querySelector('.new-book-button');
newBookButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';

  // Turn on overlay
  overlayOn();
});


// BUTTON ('Submit'): Event listener for submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (e) => {

  // Get values from input textboxes
  const titleValue = document.querySelector('#book-title').value;
  const authorValue = document.querySelector('#book-author').value;
  const pagesValue = document.querySelector('#book-pages').value;

  // Prompt user again if not all required fields filled out
  if (titleValue === '' || authorValue === '' || pagesValue === '') {
    console.log('Please fill out all input fields!');
    return;
  } 

  // Add book to myLibrary array and display new book
  addBookToLibrary();
  displayBooks();

  // Disable sending info to a server
  e.preventDefault();

  // Turn off overlay
  overlayOff();

  // Close modal
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
});

// BUTTON ('x'): Event listener for modal's exit button
const exitButton = document.querySelector('.close-button');
exitButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
    overlayOff();
  }
});

const body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
  const modal = document.querySelector('.modal');
  if (e['key'] === 'Escape') {
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
      overlayOff();
    }
  }
});

// Sample books
const sampleBook = new Book('Percy Jackson', 'Rick Riordan', 297, 'yes');
myLibrary.push(sampleBook);

// Display current books onto page
displayBooks();