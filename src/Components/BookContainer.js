// import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../Redux/Books/Books';
import InputBooks from './InputBook';
import BookList from './BookList';

// const initialState = [
//   {
//     author: 'Juliana',
//     title: 'Think and code',
//     id: 1,
//   },
//   {
//     author: 'May',
//     title: 'Think and walk',
//     id: 2,
//   },
// ];

const dispatch = useDispatch();

const BookContainer = () => {
  // const [book, setBooks] = useState(initialState);

  const addNewBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    // setBooks([...book, newBook]);
  };

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <BookList books={book} removeBookProps={deleteBook} />
      <InputBooks addBookProps={addNewBook} />
    </div>
  );
};

export default BookContainer;
