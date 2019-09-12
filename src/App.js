import React from 'react';
import './App.scss';
import Builder from './Common/Builder';
import View from './Common/View';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-wrapper">
          <Route exact path="/" component={Builder} />
          <Route path="/publish" component={View} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
