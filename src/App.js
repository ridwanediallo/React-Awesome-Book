import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import AddBook from './components/AddBook';
import NavigationBar from './components/NavigationBar';
import BooksList from './components/BooksList';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts';


function App() {
  const [books, setBooks] = useState([]);

      const fetchBooks = useCallback(async () => {
        const response = await fetch(
          'https://react-http-project-35727-default-rtdb.firebaseio.com/books.json'
        );

        const data =  await response.json();
        const loadedBooks = [];
        for(let key in data) {
          loadedBooks.push({
            id: data[key].id,
            title: data[key].title,
            author: data[key].author
          });
        }
        console.log(loadedBooks);
        setBooks(loadedBooks);
      }, []);

  useEffect(() => {
   fetchBooks();
  }, [fetchBooks]);



  async function addBookHandler(book) {
    const response = await fetch(
      'https://react-http-project-35727-default-rtdb.firebaseio.com/books.json', {
        method: 'POST',
        body: JSON.stringify(book),
        headers: { 'Content-Type': 'application/json'}
      });

      const data = await response.json();
  }

  return (
    <>
      <Navbar dark color="primary">
        <div className="container">
          <NavigationBar />
        </div>
      </Navbar>
      <Routes>
        <Route path="/" element={<Contacts />} />

        <Route
          exact
          path="/addbook"
          element={<AddBook onAddBook={addBookHandler} />}
        />
        <Route path="/booksList" element={<BooksList books={books} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;





