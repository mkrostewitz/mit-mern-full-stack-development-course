var books = []

function book(title) {
  return {title:title}
}

function factory(n) {
  for(let i =0;i < n;i++){
    books.push(book('a' + i));
  }
  return books;
}

function stampBooks(myBooks) {
  myBooks.forEach(item=> item.owner = 'me')
}

factory(3);
stampBooks(books);
console.log (books);

alert(books)