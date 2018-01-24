import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.jsx';
import Contact from './contact.jsx';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
