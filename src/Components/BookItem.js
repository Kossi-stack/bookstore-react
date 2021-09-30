import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { removeBookProps, bookProps } = props;

  return (
    <li key={bookProps.item_id}>
      <p>{bookProps.category}</p>
      <p>{bookProps.title}</p>
      <button type="button" onClick={() => removeBookProps(bookProps.item_id)}>
        Remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  bookProps: PropTypes.shape({
    item_id: PropTypes.node,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBookProps: PropTypes.func.isRequired,
};

export default BookItem;
