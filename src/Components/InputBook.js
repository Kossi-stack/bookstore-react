import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const InputBooks = (props) => {
  const [state, setState] = useState({
    title: '',
    category: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.title.trim() && state.category !== '') {
      props.addBookProps(state.title, state.category);
      setState({
        title: '',
        category: '',
      });
      setErrorMsg('');
    } else {
      setErrorMsg('Please add title and book');
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Book title"
          onChange={handleChange}
          name="title"
          value={state.title}
        />
        <select id="cars" name="category" onChange={handleChange}>
          <option value="Category">Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Passion">Passion</option>
        </select>
        <Button label="Add Book" />
        <p className="errorMsg">{errorMsg}</p>
      </form>
    </div>
  );
};

InputBooks.propTypes = {
  addBookProps: PropTypes.func.isRequired,
};

export default InputBooks;
