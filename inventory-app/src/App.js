import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-product.component";
import EditTodo from "./components/edit-product.component";
import TodosList from "./components/products-list.component";
import CreateFac from "./components/create-facture.component";
import EditFac from "./components/edit-facture.component";
import FacssList from "./components/factures-list.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/factures" className="nav-link">Factures</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/factures/create" className="nav-link">Create Facture</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/factures" exact component={FacssList} />
          <Route path="/factures/edit/:id" component={EditFac} />
          <Route path="/factures/create" component={CreateFac} />
        </div>
      </Router>
    );
  }
}

export default App;
