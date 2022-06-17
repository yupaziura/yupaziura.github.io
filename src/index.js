// basic
import React from 'react';
import ReactDOM from 'react-dom/client';

// conponents
import MainPage from './components/main-page/main-page';
import AboutMe from './components/about-me/about-me';

// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage/>
    <AboutMe/>
  </React.StrictMode>
);

