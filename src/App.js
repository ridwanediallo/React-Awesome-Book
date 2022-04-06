import {useState} from 'react';
import './App.css';
import {Container, Navbar, NavbarBrand } from 'reactstrap';
import AddBook from './components/AddBook';
import NavigationBar from './components/NavigationBar';
import BooksList from './components/BooksList';

function App() {
  const [booksList, setBooksList] = useState([]);

  const addBookHandler = (title, author) => {
    setBooksList((prevBookList) => {
      return [...prevBookList, {id: Math.random().toString(), title, author}]
    })
  }

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavigationBar />
          {/* <NavbarBrand href="/">Awesome Book</NavbarBrand> */}
        </div>
      </Navbar>
      <AddBook onAddBook={addBookHandler}/>
      <BooksList books={booksList}/>
    </div>
  );
}

export default App;



