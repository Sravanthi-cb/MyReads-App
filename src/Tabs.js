import React, { Component } from 'react';
import Book from './Book';

export class CurrentlyReading extends Component {

  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">

          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                  .filter(book => book.shelf === 'currentlyReading')
                  .map(book => (
                    <li key={book.id}>
                      <Book book={book}
                        moveShelf={this.props.moveShelf}
                        currentShelf="currentlyReading"
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

export class WantToRead extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">

          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                  .filter(book => book.shelf === 'wantToRead')
                  .map(book => (
                    <li key={book.id}>
                      <Book book={book}
                        moveShelf={this.props.moveShelf}
                        currentShelf='wantToRead'

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

export class Read extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                  .filter(book => book.shelf === 'read')
                  .map(book => (
                    <li key={book.id}>
                      <Book book={book}
                        moveShelf={this.props.moveShelf}
                        currentShelf='read'
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
