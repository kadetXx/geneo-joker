import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './assets/sass/main.scss'

import Header from './components/layout/Header';
import Footer from './components/layout/Footer'

import Home from './pages/Home';
import Category from "./pages/Category"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/categories/:category' component={Category} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
