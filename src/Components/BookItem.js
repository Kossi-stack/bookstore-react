import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { removeBookProps, bookProps } = props;
  console.log(bookProps.id);

  return (
    <li key={bookProps.id}>
      <p>{bookProps.category}</p>
      <p>{bookProps.title}</p>
      <button type="button" onClick={() => removeBookProps(bookProps.id)}>
        Remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  bookProps: PropTypes.shape({
    id: PropTypes.node,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBookProps: PropTypes.func.isRequired,
};

export default BookItem;
