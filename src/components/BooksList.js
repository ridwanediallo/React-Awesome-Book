import React from 'react';
import { Container } from 'reactstrap';

function BooksList({ books }) {
  return (
    <Container>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item d-flex justify-content-between">
            <p>
              {book.title} by {book.author}
            </p>
            <button type="button" className="btn btn-danger">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default BooksList;





