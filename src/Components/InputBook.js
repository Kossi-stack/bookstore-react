/* eslint-disable */

import { useState } from 'react';
import Button from './Button';

const InputBooks = (props) => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.title.trim() && state.author.trim()) {
      props.addBookProps(state.title, state.author);
      setState({
        title: '',
        author: '',
      });
    } else {
      alert('please add book')
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          onChange={handleChange}
          name="title"
          value={state.title}
        />
        <input
          placeholder="arthur"
          onChange={handleChange}
          name="author"
          value={state.author}
        />
        <Button label="Submit" />
      </form>
    </div>
  );
};

export default InputBooks;
