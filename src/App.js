import React from 'react';
import Main from './Main';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main state={this.state} moveShelf={this.moveShelf} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div>
          {/* Shelf Detail Pages */}
          <Navbar>
            <Nav>
              <NavItem eventKey={1} href="/">Currently Reading</NavItem>
              <NavItem eventKey={2} href="/WantToRead">Want To Read</NavItem>
              <NavItem eventKey={3} href="/Read">Read</NavItem>
              <NavItem eventKey={4} href="/Search">Search</NavItem>
            </Nav>
          </Navbar>
        </div>
      </div>
    )
  };
}

export default BooksApp


