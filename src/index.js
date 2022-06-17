// basic
import React from 'react';
import ReactDOM from 'react-dom/client';

// conponents
import MainPage from './components/main-page/main-page';

// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage/>
  </React.StrictMode>
);

