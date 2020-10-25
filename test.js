'use strict';

// QUESTION 1
const myFunction = () => {
  const arr = [10, 12, 15, 21];
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
      console.log('Index: ' + i);
    }, 3000);
  }
};

myFunction();

// It will output the same number for all iterations because
// Set timeout is looping for every character at once 
// so they will not appear in sequence
// I found this same scenario here: https://stackoverflow.com/questions/1776687/settimeout-inside-for-loop

// QUESTION 2 
function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
console.log(parent());

// doesn't log anything on the console because variable is declared using the 'var' keyword
// which means it becomes a function-scoped/globally scoped variable, therefore available in the global scope
// and when returning hoisted() the function will takeover the global scoped variable



// QUESTION 3
const books = [
  {
  bookName: 'The Nature of Software Development',
  author: 'Ron Jeffries',
  coverURL:
  'https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png',
  },
  {
  bookName: 'Clean Code',
  author: 'Robert Cecil Martin',
  coverURL:
  },
];

function injectBooksToDOM(booksObj) {
// will loop through the each obkect key
  for (const book of booksObj) {
  // inserts book name and author to index.html
    document.body.innerHTML = `${book.bookName} by ${book.author}`;
  // create img to link cover to
    let img = document.createElement('img');
    img.src = `${book.coverURL}`;
// check if book cover contains data, if so it will append to the document
      if(book.coverURL === true){
        document.body.appendChild(img);
    } else {
       console.log('An error has ocurred');
    }
  }
}
  
  injectBooksToDOM(books);

// QUESTION 4 
function test() {
  console.log('one');
  setTimeout(function() {
    console.log('two');
    setTimeout(function() {
      console.log('three');
    }, 0);
  }, 1000);
  setTimeout(function() {
    console.log('four');
    setTimeout(function() {
      console.log('five');
    }, 1000);
    c;
  }, 0);
  console.log('six');
}
test();

/* According to https://github.com/flauc/angular2-notifications/issues/238
The output is not deterministic since it will depend on each browser's load speed and the computer where this gets ran.
Also, c is not defined anywhere else in the function so there will be an error in the output*/
