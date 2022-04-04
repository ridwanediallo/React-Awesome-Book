import logo from './logo.svg';
import './App.css';
import {Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <Container>
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">React Bootstrap Project Setup</NavbarBrand>
          </div>
        </Navbar>
      </div>
    </Container>
  );
}

export default App;



