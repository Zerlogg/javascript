const books = document.querySelectorAll('#book-list li .name');
const banner = document.querySelector('#page-banner');

Array.from(books).forEach(function(book){
  book.textContent += ' (Book title)';
});
console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML content</p>'; 
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner); 