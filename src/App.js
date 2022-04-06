import './App.css';
import {Container, Navbar, NavbarBrand } from 'reactstrap';
import AddBook from './components/AddBook';

function App() {
  return (

      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">React Bootstrap Project Setup</NavbarBrand>
          </div>
        </Navbar>
          <AddBook />
      </div>

  );
}

export default App;

