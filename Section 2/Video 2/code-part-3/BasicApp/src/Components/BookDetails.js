import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';

import Book from './Book';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.loadBook = this.loadBook.bind(this);
  }

  state = {
    book: null,
  }

  componentDidMount() {
    this.loadBook(this.props.match.params.bookId);
  }

  loadBook(id) {
    // query API for active shelves and add the books into state
    BooksAPI.get(id).then((book) => this.setState({ book }));
  }

  render() {
    const { book } = this.state;
    if (!book) {
      return <p>Loading book</p>;
    }
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              name='searchTerm'
              value={ book.title }
              readOnly={ true }
            />

          </div>
        </div>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>&nbsp;</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              <li>
                <div className='book'>
                  <div className='book-top'>
                    <div className='book-cover' style={ { width: 128, height: 193, backgroundImage: `url("${ book.imageLinks.thumbnail }")` } } />
                  </div>
                  <div className='book-title'>{book.title}</div>
                  <div className='book-authors'>{book.authors.map((author) => <span key={ author }>{author}<br /></span>)}</div>
                  <div className='book-authors'>{ book.subtitle }</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetails;
