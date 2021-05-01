import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppProvider } from './context/context';
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppProvider>
        <Root />
      </AppProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
