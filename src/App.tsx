import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContentRouter } from './contentRouter/ContentRouter';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterMovil } from './pages/FooterMovil';

function App() {
  return (
    <div style={{marginBottom:'80px'}}>
      <BrowserRouter basename="app">
          <ContentRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
