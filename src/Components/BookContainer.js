/* eslint-disable */
// import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../Redux/Books/Books';
import InputBooks from './InputBook';
import BookList from './BookList';

const BookContainer = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  // const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
  // const appId = 'DXx22TZCYfuKQX6UV8m5';
  // const url = `${baseUrl}/apps/${appId}/books`;

  const addNewBook = async (payload) => {
    // const newBook = {
    //   id: uuidv4(),
    //   title,
    //   category,
    // };

    // dispatch(addBook(newBook));
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DXx22TZCYfuKQX6UV8m5/books', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; Charset=UTF-8',
      },
    })
      .then((response) => response.ok)
      .then((data) => {
        if (data) {
          dispatch(addBook(payload))
        }}
  )}

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
