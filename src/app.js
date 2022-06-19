// basic
import {React, useState} from 'react';

// conponents
import MainPage from './pages/page-main/main-page';
import AboutMe from './pages/page-about-me/about-me';
import Studies from './pages/page-sudies/studies';
import Experience from './pages/page-experience/experience';
import Skills from './pages/page-skills/skills';
import Footer from './pages/footer/footer';

// styles


const App = () => {
    const [language, setLanguage] = useState(0);
    
    return (
      <>
        <MainPage language={language} setLanguage={setLanguage}/>
        <AboutMe/>
        <Studies/>
        <Experience/>
        <Skills/>
        <Footer/>
    </>
    )
}

export default App;

