import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/home/home.component'
import BlogPage from './pages/blog/blog-page.component';
import AboutPage from './pages/about/about-page.component';
import ReviewsPage from './pages/reviews/reviews-page.component'

import './App.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='/reviews' component={ReviewsPage} />
        <Route path='/about' component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
