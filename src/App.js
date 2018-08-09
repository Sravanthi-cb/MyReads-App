import React from 'react';
import Main from './Main';
import Header from './Header';

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
    BooksAPI.update(book, shelf).then(()=>{
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })})
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

export default BooksApp


