import React from 'react'
import { Container, Navbar, NavbarBrand } from 'reactstrap';


function AddBook() {
  return (
    <Container>
      <form className="mt-5">
        <div className="row">
          <div class="mb-3">
            <label for="title" class="form-label">
              Enter your title
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">
              Enter your title
            </label>
            <input
              type="text"
              class="form-control"
              id="author"
              placeholder="author"
            />
          </div>
        </div>
      </form>
    </Container>
  );
}

export default AddBook








