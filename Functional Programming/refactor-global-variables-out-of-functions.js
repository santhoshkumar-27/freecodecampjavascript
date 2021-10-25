// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (books,bookName) {
  return [...books, bookName];
  
  // Change code above this line
}

// Change code below this line
function remove (book, bookName) {
  let books = [...book]
  var book_index = books.indexOf(bookName);
  if (book_index >= 0) {

    books.splice(book_index, 1);
    return books;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);