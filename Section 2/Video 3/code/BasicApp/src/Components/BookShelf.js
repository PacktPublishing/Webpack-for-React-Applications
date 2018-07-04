import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

// Have created this component as a pure function as it will always render an element
// There is no reason each bookShelf object should have it's own state,
// when parent components can manage the state of each shelf
// It also passes down the handleStatusUpdate method from App

const BookShelf = ({ bookShelfTitle, books, handleStatusUpdate }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{bookShelfTitle}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {
          books.length > 0
            && books.map(book => {
              return (
                <li key={ book.id }>
                  <Book
                    shelf={ book.shelf }
                    bookId={ book.id }
                    bookCoverImage={ book.imageLinks.thumbnail }
                    bookTitle={ book.title }
                    bookAuthors={ book.authors }
                    handleStatusUpdate={ handleStatusUpdate }
                    { ...book }
                  />
                </li>
              );
            })
        }
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  bookShelfTitle: PropTypes.string,
  books: PropTypes.array,
  handleStatusUpdate: PropTypes.func.isRequired,
};

BookShelf.defaultProps = {
  bookShelfTitle: 'No title set',
  books: [],
};

export default BookShelf;
