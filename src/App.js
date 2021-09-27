import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <switch>
        <Route exact path="/">
          <h1>Hello</h1>
        </Route>
        <Route path="/C">
          <h1>Hello</h1>
        </Route>
      </switch>
    </div>
  );
}

export default App;
