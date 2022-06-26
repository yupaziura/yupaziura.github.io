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
    const [theme, setTheme] = useState(0);

    
    return (
      <>
        {/* <MainPage language={language} setLanguage={setLanguage} setTheme={setTheme} theme={theme}/> */}
        <AboutMe language={language} theme={theme} />
        {/* <Studies language={language} theme={theme} />
        <Skills language={language} theme={theme} />
        <Experience language={language} theme={theme} />
        <Footer language={language} theme={theme} /> */}
    </>
    )
}

export default App;

