import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderContent from './ts/Header';
import Login from './ts/Login';
import Top from './ts/Top'

function App() {
  return (
    <Router>
      <HeaderContent />
      <Route exact path='/' component={Top}/>
      <Route path='/login' component={Login}/>
    </Router>
  )
}

export default App;