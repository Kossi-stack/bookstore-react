import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = (props) => {
  const { books, removeBookProps } = props;

  return (
    <ul className="items">
      {books.map((book) => (
        <BookItem
          removeBookProps={removeBookProps}
          bookProps={book}
          key={book.item_id}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  /* eslint-disable */
  books: PropTypes.array.isRequired,
  /* eslint-enable */
  removeBookProps: PropTypes.func.isRequired,
};

export default BookList;
