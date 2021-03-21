import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderContent from './components/Header';
import LoginForm from './components/Login';
import Top from './ts/Top'

function App() {
  return (
    <Router>
      <HeaderContent />
      <Route exact path='/' component={Top}/>
      <Route path = '/top' component={Top} />
      <Route path='/login' component={LoginForm}/>
    </Router>
  )
}

export default App;