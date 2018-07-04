import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';

import BookShelf from './BookShelf';

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array,
    handleBookStatusUpdate: PropTypes.func.isRequired,
  }

  static defaultProps = {
    books: [],
  }

  state = {
    searchedList: [],
    query: '',
  }

  handleSearchUpdate(e) {
    // Handles submitting teh search form
    const query = e.target.value;
    this.setState({
      query,
    });
    // load books form API
    BooksAPI.search(query, 20).then((books) => {
      const searchedBooks = books;
      const currentBooks = this.props.books;

      // Set the parameters of books to match the ones on shelves if they match
      for (let i = 0; i < searchedBooks.length; i++) {
        for (let j = 0; j < currentBooks.length; j++) {
          if (searchedBooks[i].id === currentBooks[j].id) {
            searchedBooks[i].shelf = currentBooks[j].shelf;
            break;
          } else {
            searchedBooks[i].shelf = 'none';
          }
        }
      }

      this.setState({ searchedList: searchedBooks });
    });
  }

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              name='searchTerm'
              placeholder='Search by title or author'
              onChange={ (e) => { this.handleSearchUpdate(e); } }
              value={ this.state.query }
            />
          </div>
        </div>
        <div className='search-books-results'>
          <BookShelf
            bookShelfTitle='Search Results'
            books={ this.state.searchedList }
            handleStatusUpdate={ this.props.handleBookStatusUpdate }
          />
          <ol className='books-grid' />
        </div>
      </div>
    );
  }
}

export default SearchPage;
