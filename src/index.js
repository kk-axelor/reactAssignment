import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardContextProvider } from './cardContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <CardContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CardContextProvider>

);

