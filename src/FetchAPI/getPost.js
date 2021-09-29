// import { useDispatch } from 'react-redux';
import { displayBook } from '../Redux/Books/Books';

const getPOST = () => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DXx22TZCYfuKQX6UV8m5/books')
    .then((response) => response.json())
    .then((data) => {
      const bookObj = Object.entries(data);
      /* eslint-disable */
      const bookArray = bookObj.map(([item_id, value]) => {
        const [eachBook] = value;
        return { ...eachBook, item_id };
        /* eslint-enable */
      });
      dispatch(displayBook(bookArray));
    });
};

export default getPOST;
