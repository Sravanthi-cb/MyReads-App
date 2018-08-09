import React, { Component } from 'react';
import Book from './Book';

 class BookTab extends Component {

  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">

          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                  .filter(book => book.shelf === this.props.tabName)
                  .map(book => (
                    <li key={book.id}>
                      <Book book={book}
                        moveShelf={this.props.moveShelf}
                        currentShelf={this.props.tabName}
                      />
                    </li>
                  ))
              }

            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookTab