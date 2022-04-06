import React from 'react'

function BooksList({books}) {
  return (
    <ul class="list-group">
      {books.map((book) => (
        <li key={book.id} class="list-group-item">{book.title} by {book.author}</li>
      ))}
    </ul>
  );
}

export default BooksList


