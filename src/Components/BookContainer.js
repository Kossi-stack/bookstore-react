import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputBooks from './InputBook';
import BookList from './BookList';

const initialState = [
  {
    author: 'Juliana',
    title: 'Think and code',
    id: 1,
  },
  {
    author: 'May',
    title: 'Think and walk',
    id: 2,
  },
];

const BookContainer = () => {
  const [book, setBooks] = useState(initialState);

  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    setBooks([...book, newBook]);
  };

  const removeBook = (id) => {
    setBooks([...book.filter((book) => book.id !== id)]);
  };

  return (
    <div>
      <BookList books={book} removeBookProps={removeBook} />
      <InputBooks addBookProps={addBook} />
    </div>
  );
};

export default BookContainer;
