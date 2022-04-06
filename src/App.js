import { useState } from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import AddBook from './components/AddBook';
import NavigationBar from './components/NavigationBar';
import BooksList from './components/BooksList';
import { Route, Routes } from 'react-router-dom';
import Contacts from './Contacts';
function App() {
  const [booksList, setBooksList] = useState([]);

  const addBookHandler = (title, author) => {
    setBooksList((prevBookList) => {
      return [...prevBookList, { id: Math.random().toString(), title, author }];
    });
  };

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
        <Route path="/booksList" element={<BooksList books={booksList} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;


