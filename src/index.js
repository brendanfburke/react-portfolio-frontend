import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route }  from 'react-router'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
const URL = 'https://brendan-burke-portfolio.herokuapp.com/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects URL={URL} />} />
          <Route path='/about' element={<About URL={URL} />} />
        </Route>
      </Routes>
      <Footer /> 
    </Router>

  </React.StrictMode>
);

