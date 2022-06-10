import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Menu/Navbar';
import Login from './components/Login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes />
    </Router>
  </React.StrictMode>,
);
