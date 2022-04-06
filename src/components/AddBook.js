import React, {useState} from 'react'
import { Container, Navbar, NavbarBrand } from 'reactstrap';


function AddBook({onAddBook}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');


   const addBooksHandler = (event) => {
       event.preventDefault();
       console.log(title, author)
       onAddBook(title, author)

       setTitle('');
       setAuthor('');
   }

    // const titleHandler = (event) => {
    //     event.preventDefault();
    //     setTitle(event.target.value);
    // }
    // const authorHandler = (event) => {
    //   event.preventDefault();
    //   setAuthor(event.target.value);
    // };
  return (
    <Container>
      <form className="mt-5" onSubmit={addBooksHandler}>
        <div className="row">
          <div className="col-sm-4 mb-3">
            <label htmlFor="title" className="form-label">
              Enter your title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 mb-3">
            <label htmlFor="author" className="form-label">
              Enter your title
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              className="form-control"
              id="author"
              placeholder="author"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Primary
        </button>
      </form>
    </Container>
  );
}

export default AddBook















