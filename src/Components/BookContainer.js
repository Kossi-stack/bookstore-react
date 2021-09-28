import { useState } from 'react';
import InputBooks from './InputBook';

const initialState = [
  {
    arthur: 'Juliana',
    title: 'Think and code',
  },
  {
    arthur: 'May',
    title: 'Think and walk',
  },
];

const BookContainer = () => {
  const [books, setBooks] = useState(initialState);

  return (
    <div>
      <ul>
        {state.map((book) => (
          <li key={book.id}>
            <p>{book.arthur}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <InputBooks />
    </div>
  );
};

export default BookContainer;
