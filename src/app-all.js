// basic
import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// conponents
import App from './app';
import ProjectWeb from './pages/page-progect-web/project-web';
import ProjectGrass from './pages/page-project-grass/project-grass';
import ProjectArch from './pages/page-project-arch/project-arch';
import Nav from './components/nav/nav';

// styles


const AppAll = () => {
    const [language, setLanguage] = useState(0);
    const [theme, setTheme] = useState(0);

    return (
        <Router>
            <Nav language={language} setLanguage={setLanguage} setTheme={setTheme} theme={theme}/>
            <Routes>
                <Route path='/' element={<App language={language} setLanguage={setLanguage} setTheme={setTheme} theme={theme}/>}/>
                <Route path='/projects_web' element={<ProjectWeb language={language} theme={theme}/>}/>
                <Route path='/projects_grass' element={<ProjectGrass language={language} theme={theme}/>}/>
                {/* <Route path='/projects_arch' element={<ProjectArch language={language} theme={theme}/>}/> */}
            </Routes>
        </Router>
    )
}

export default AppAll;