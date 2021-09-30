import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { removeBookProps, bookProps } = props;

  return (
    <li key={bookProps.item_id} className="item">
      <div className="item1">
        <p className="category">{bookProps.category}</p>
        <p className="title">{bookProps.title}</p>
        <button
          type="button"
          onClick={() => removeBookProps(bookProps.item_id)}
          className="deleteBook"
        >
          Remove
        </button>
      </div>
      <div className="item2">
        <span className="meter" />
        <span className="completed">
          <span className="percentage">64%</span>
          <span className="completedText">Completed</span>
        </span>
      </div>
      <div className="item3">
        <p className="currentChapter">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="updateBook">UPDATE PROGRESS</button>
      </div>
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
