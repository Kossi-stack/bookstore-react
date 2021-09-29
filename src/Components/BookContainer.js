/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook} from '../Redux/Books/Books';
import InputBooks from './InputBook';
import BookList from './BookList';
import getPOST from '../FetchAPI/getPost';
import { useEffect } from 'react';

const BookContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  const appId = 'DXx22TZCYfuKQX6UV8m5';
  const url = `${baseUrl}/apps/${appId}/books`;

  useEffect(() => {
    dispatch(getPOST());
  }, [])

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

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  }; 

  return (
    <div>
      <BookList books={books} removeBookProps={deleteBook} />
      <InputBooks addBookProps={addNewBook} />
    </div>
  );
};

export default BookContainer;
