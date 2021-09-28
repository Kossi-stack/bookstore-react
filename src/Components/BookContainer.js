import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputBooks from './InputBook';

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

  console.log(book);

  return (
    <div>
      <ul>
        {book.map((book) => (
          <li key={book.id}>
            <p>{book.author}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <InputBooks addBookProps={addBook} />
    </div>
  );
};

export default BookContainer;
