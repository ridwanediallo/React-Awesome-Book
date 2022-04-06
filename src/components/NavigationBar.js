import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Awesome Book
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/addbook"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Add New
              </Link>
            </li>
            <li className="nav-item">
              <Link to="booksList" className="nav-link" href="#">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contacts" className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;




