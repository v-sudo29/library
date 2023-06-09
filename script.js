// GLOBAL VARIABLES
const myLibrary =[];
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('.modal');
const exitButton = document.querySelector('.close-button');
const body = document.querySelector('body');

// FUNCTION: Put title in double quotes
function addTitleQuotes (title) {
  const newTitle = `"${  title  }"`;
  return newTitle;
}

// FUNCTION: Book constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = addTitleQuotes(title);
    this.author = author;
    this.pages = `${pages  } pages`;
    this.read = read;
  }
}

// FUNCTION: Adds book to myLibrary array
function addBookToLibrary() {

  // Obtain value of user input
  const bookTitle = document.querySelector('#book-title-input').value;
  const bookAuthor = document.querySelector('#book-author-input').value;
  const bookPages = document.querySelector('#book-pages-input').value;
  const bookReadBoolean = document.querySelector('#book-read-input').checked;
  let bookRead = null;

  if (bookReadBoolean === true) {
    bookRead = 'Read';
  } else {
    bookRead = 'Not Read';
  }

  // Create new Book object to store user input
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(newBook);
}

// FUNCTION: run function to listen to all toggles
function listenForToggle(toggle) {
  toggle.addEventListener('click', () => {

    // Check data structure for 'read' status
    const bookTitle = (addTitleQuotes(toggle.id)).replace("-", " ");
    const bookIndex = myLibrary.findIndex(item => item.title === bookTitle);
    const readStatus = myLibrary[bookIndex].read;
    const readDivStatus = document.getElementById(`${toggle.id}-book-read`);
    
    // Remove or add checked attribute and change data in data structure
    if (readStatus === 'Read') {
      toggle.removeAttribute('checked');
      readDivStatus.innerHTML = 'Not Read';

      // Update data structure
      myLibrary[bookIndex].read = 'Not Read';

    } else if (readStatus === 'Not Read') {
      toggle.setAttribute('checked', 'checked');
      readDivStatus.innerHTML = 'Read';

      // Update data structure
      myLibrary[bookIndex].read = 'Read';
    }
  });
}

// FUNCTION: removes card
function removeCard(button) {
  button.parentElement.parentElement.remove();
}

// FUNCTION: add event listener to toggle
function addToggleEventListener(cardID) {
  const currentToggle = document.getElementById(cardID);
  listenForToggle(currentToggle);
}

// FUNCTION: add event listener to remove button
function addRemoveButtonEventListener(cardID) {
  const currentRemoveBtn = document.getElementById(cardID);
  currentRemoveBtn.addEventListener('click', () => removeCard(currentRemoveBtn));
}

// FUNCTION: Displays books onto page
function displayBooks() {
  const numberOfBooks = myLibrary.length;

  for (let i = numberOfBooks - 1; i < myLibrary.length; i += 1) {
    // Create new elements for new card
    const cardDiv =  document.createElement('div');
    const bookTitleDiv = document.createElement('div');
    const bookAuthorDiv = document.createElement('div');
    const bookPagesDiv = document.createElement('div');
    const bookReadDiv = document.createElement('div');
    const bookReadContainer = document.createElement('div');
    const toggleContainer = document.createElement('div');
    const toggleLabel = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const removeBtnDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const cardsInnerContainer = document.querySelector('.cards-container');

    // Set attributes of elements
    cardDiv.setAttribute('class', 'card');
    bookTitleDiv.setAttribute('class', 'book-title');
    bookAuthorDiv.setAttribute('class', 'book-author');
    bookPagesDiv.setAttribute('class', 'book-pages');
    bookReadDiv.setAttribute('class', 'book-read');
    removeBtnDiv.setAttribute('class', 'remove');
    removeBtn.setAttribute('class', 'removeBtn');
    toggleContainer.setAttribute('class', 'toggle-container');

    // Remove title quotations and replace spaces with hyphens
    const noQuotesTitle = myLibrary[i].title.slice(1, (myLibrary[i].title).length - 1);
    const noSpacesTitle = noQuotesTitle.replace(" ", "-");

    // Set attributes of elements
    toggleLabel.setAttribute('class', 'switch');
    input.setAttribute('class', 'toggle-switch');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', `${noSpacesTitle}`);
    removeBtn.setAttribute('id', `${noSpacesTitle}AndRemoveBtn`);
    bookReadDiv.setAttribute('id', `${noSpacesTitle}-book-read`);
    span.classList.add('toggle', 'round');
    bookReadContainer.setAttribute('class', 'book-read-container');

    // Create text nodes
    const title = document.createTextNode(`${myLibrary[i].title}`);
    const author = document.createTextNode(`${myLibrary[i].author}`);
    const pages = document.createTextNode(`${myLibrary[i].pages}`);
    const read = document.createTextNode(`${myLibrary[i].read}`);
    const remove = document.createTextNode('Remove');

    // Append elements to parent node
    removeBtn.appendChild(remove);
    removeBtnDiv.appendChild(removeBtn);
    bookTitleDiv.appendChild(title);
    bookAuthorDiv.appendChild(author);
    bookPagesDiv.appendChild(pages);
    bookReadDiv.appendChild(read);
    bookReadContainer.appendChild(toggleContainer);
    bookReadContainer.appendChild(bookReadDiv);
    toggleContainer.appendChild(toggleLabel);
    toggleLabel.appendChild(input);
    toggleLabel.appendChild(span);

    cardDiv.appendChild(bookTitleDiv);
    cardDiv.appendChild(bookAuthorDiv);
    cardDiv.appendChild(bookPagesDiv);
    cardDiv.appendChild(bookReadContainer);
    cardDiv.appendChild(removeBtnDiv);

    cardsInnerContainer.appendChild(cardDiv);

    // Set toggle on or off based on 'read' status
    const inputDOM = document.getElementById(`${noSpacesTitle}`);

    if (`${myLibrary[i].read}` === 'Read') {
      inputDOM.setAttribute('checked', 'checked');
    } else if (`${myLibrary[i].read}` === 'Not Read') {
      inputDOM.removeAttribute('checked');
    }

    if (read === "Read") {
      inputDOM.setAttribute('checked', 'checked');
    }

    // Set event listeners for card: toggle and remove button
    addToggleEventListener(`${noSpacesTitle}`);
    addRemoveButtonEventListener(`${noSpacesTitle}AndRemoveBtn`);
  }
}

// FUNCTION: turns off overlay
function overlayOff() {
  overlay.classList.remove(["overlay-active"]);
}

// FUNCTION: turns on overlay
function overlayOn() {
  overlay.classList.add(["overlay-active"]);
}

// FUNCTION: turns modal on
function modalOn() {
  modal.classList.add(["modal-active"]);
  overlayOn();
}

// FUNCTION: turns modal off
function modalOff() {
  modal.classList.remove(["modal-active"]);
    overlayOff();
}

// FUNCTION: reset form
function resetForm() {
  document.querySelector('#form').reset();
}

// BUTTON ('NEW BOOK'): open modal
const newBookButton = document.querySelector('.new-book-button');
newBookButton.addEventListener('click', modalOn);


// BUTTON ('Submit'): Event listener for submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (e) => {

  // Get values from input textboxes
  const titleValue = document.querySelector('#book-title-input').value;
  const authorValue = document.querySelector('#book-author-input').value;
  const pagesValue = document.querySelector('#book-pages-input').value;

  // Prompt user again if not all required fields filled out
  if (titleValue === '' || authorValue === '' || pagesValue === '') {
    alert('Please fill out all input fields!');
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
  modalOff();

  // Reset all form values
  resetForm();
});

// BUTTON ('x'): Event listener for modal's exit button
exitButton.addEventListener('click', modalOff);
body.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalOff();
    resetForm();
  }
});

// BUTTON ('cancel): Event listener for modal's cancel button
const cancelButton = document.querySelector('.cancel-button') 
cancelButton.addEventListener('click', () => {
  modalOff();
  overlayOff();
});

// Event listener for clicking on active overlay to exit
overlay.addEventListener('click', () => {
  modalOff();
  overlayOff();
  resetForm();
});