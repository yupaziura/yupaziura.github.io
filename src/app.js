// basic
import {React, useState} from 'react';

// conponents
import MainPage from './pages/page-main/main-page';
import AboutMe from './pages/page-about-me/about-me';
import Studies from './pages/page-sudies/studies';
import Experience from './pages/page-experience/experience';
import Skills from './pages/page-skills/skills';
import Footer from './pages/footer/footer';
import Projects from './pages/page-projects/projects';

// styles


const App = (props) => {


    
    return (
      <>
        <MainPage language={props.language} setLanguage={props.setLanguage} setTheme={props.setTheme} theme={props.theme}/>
        <AboutMe language={props.language} theme={props.theme} />
        <Studies language={props.language} theme={props.theme} />
        <Skills language={props.language} theme={props.theme} />
        <Experience language={props.language} theme={props.theme} />
        <Projects language={props.language} theme={props.theme}/>
        <Footer language={props.language} theme={props.theme} />
    </>
    )
}

export default App;

