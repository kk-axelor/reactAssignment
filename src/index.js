import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { myApi } from './redux/myapi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={myApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

