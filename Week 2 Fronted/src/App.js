import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NewsCategory from './components/NewsCategory';
import NewsFeed from './components/NewsFeed';
import UIEnhancements from './components/UIEnhancements';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/news-category" component={NewsCategory} />
        <Route path="/news-feed" component={NewsFeed} />
        <Route path="/ui-enhancements" component={UIEnhancements} />
      </Switch>
    </Router>
  );
}

export default App;