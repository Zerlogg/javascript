const bookList = document.querySelector('#book-list');
const listItems = document.querySelectorAll('#book-list ul li');

console.log('#book-list next sibling:', bookList.nextSibling);
console.log('#book-list next element sibling:', bookList.nextElementSibling);
console.log('#book-list previous sibling:', bookList.previousSibling);
console.log('#book-list previous element sibling:', bookList.previousElementSibling);
Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!'; 
    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  });
});

// prevent default behaviour

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
}); 