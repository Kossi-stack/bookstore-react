import React from 'react';
import PropTypes from 'prop-types';

const BookList = (props) => {
  const { books, removeBookProps } = props;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <p>{book.author}</p>
          <p>{book.title}</p>
          <button type="button" onClick={() => removeBookProps(book.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  /* eslint-disable-next-line */
  books: PropTypes.array.isRequired,
  /* eslint-enable */
  removeBookProps: PropTypes.func.isRequired,
};

export default BookList;
