import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf';

const Home = ({ books, handleBookStatusUpdate }) => {
  const shelves = [
    {
      name: 'Currently Reading',
      slug: 'currentlyReading',
    },
    {
      name: 'Want to Read',
      slug: 'wantToRead',
    },
    {
      name: 'Read',
      slug: 'read',
    },
  ];
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        {shelves.map((bookShelf) =>
          (<BookShelf
            key={ bookShelf.slug }
            bookShelfTitle={ bookShelf.name }
            books={ books.filter((book) => {
              return book.shelf === bookShelf.slug;
            }) }
            handleStatusUpdate={ handleBookStatusUpdate }
          />)
        )}
      </div>

      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};

Home.propTypes = {
  books: PropTypes.array,
  handleBookStatusUpdate: PropTypes.func.isRequired,
};

Home.defaultProps = {
  books: [],
};

export default Home;
