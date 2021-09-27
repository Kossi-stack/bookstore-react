import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navigation';
import Books from './Redux/Books/Books';
import Categories from './Redux/Categories/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
