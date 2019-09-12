import React from 'react';
import './App.scss';
import Builder from './Common/Builder';
import View from './Common/View';
import Dashboard from './Common/Dashboard';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-wrapper">
          <Route exact path="/create-campaign/:id" component={Builder} />
          <Route path="/publish" component={View} />
          <Route exact path="/" component={Dashboard} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
