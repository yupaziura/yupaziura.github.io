// basic
import React from 'react';
import ReactDOM from 'react-dom/client';

// conponents
import MainPage from './pages/page-main/main-page';
import AboutMe from './pages/page-about-me/about-me';
import Studies from './pages/page-sudies/studies';
import Experience from './pages/page-experience/experience';
import Skills from './pages/page-skills/skills';

// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage/>
    <AboutMe/>
    <Studies/>
    <Experience/>
    <Skills/>
  </React.StrictMode>
);

