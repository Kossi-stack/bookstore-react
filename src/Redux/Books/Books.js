const ADD_BOOK = 'bookStore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/Books/REMOVE_BOOK';
const DISPLAY_BOOK = 'bookStore/Books/DISPLAY_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const displayBook = (payload) => ({
  type: DISPLAY_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    case DISPLAY_BOOK:
      return state.concat(action.payload);

    default:
      return state;
  }
};

export default reducer;
