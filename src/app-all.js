// basic
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// conponents
import App from './app';
import ProjectWeb from './pages/page-progect-web/project-web';
import ProjectGrass from './pages/page-project-grass/project-grass';
import ProjectArch from './pages/page-project-arch/project-arch';

// styles


const AppAll = () => {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<App/>}/>
                <Route path='/projects_web' element={<ProjectWeb/>}/>
                <Route path='/projects_grass' element={<ProjectGrass/>}/>
                <Route path='/projects_arch' element={<ProjectArch/>}/>
            </Routes>
        </Router>
    )
}

export default AppAll;