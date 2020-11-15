import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/home/home.component'
import BlogPage from './pages/blog/blog-page.component';
import AboutPage from './pages/about/about-page.component';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='/about' component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
