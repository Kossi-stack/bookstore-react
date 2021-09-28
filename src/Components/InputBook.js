/* eslint-disable */

import { useState } from 'react';
import Button from './Button';

const InputBooks = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();


  };

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  return (
    <div>
      <div>{state.title}</div>
      <div>{state.author}</div>
      <form onSubmit={handleSubmit}>
        <input placeholder="title" onChange={handleChange} name="title" value={state.title} />
        <input placeholder="arthur" onChange={handleChange} name="author" value={state.author} />
        <Button label="Submit" />
      </form>
    </div>
  );
};

export default InputBooks;