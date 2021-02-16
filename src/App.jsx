import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import BlogPage from './pages/blog/blog-page.component';
import AboutPage from './pages/about/about-page.component';
import PostPage from './pages/post/PostPage';

import './App.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/posts/:id" render={(props) => <PostPage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
