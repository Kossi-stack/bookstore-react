import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navigation';
import Categories from './Redux/Categories/Categories';
import BookContainer from './Components/BookContainer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <BookContainer />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
