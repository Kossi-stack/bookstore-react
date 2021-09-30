import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addBook, removeBook, clearBooks } from '../Redux/Books/Books';
import InputBooks from './InputBook';
import BookList from './BookList';
import getBooks from '../FetchAPI/getBooks';
import store from '../Redux/ConfigureStore';

const BookContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  const appId = 'DXx22TZCYfuKQX6UV8m5';
  const url = `${baseUrl}/apps/${appId}/books`;

  useEffect(() => {
    store.dispatch(clearBooks());
    store.dispatch(getBooks());
  }, []);

  const addNewBook = async (payload) => {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; Charset=UTF-8',
      },
    })
      .then((response) => response.ok)
      .then((data) => {
        if (data) {
          dispatch(addBook(payload));
        }
      });
  };

  const deleteBook = async (id) => {
    await fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then(dispatch(removeBook(id)));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <BookList books={books} removeBookProps={deleteBook} />
        <InputBooks addBookProps={addNewBook} />
      </div>
    </div>
  );
};

export default BookContainer;
