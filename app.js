const titles = document.getElementsByClassName('title');
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
var books = document.querySelector('#book-list li .name');
console.log(books);

Array.from(titles).forEach(function(title){
  console.log(title);
books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){
  console.log(book);
}); 