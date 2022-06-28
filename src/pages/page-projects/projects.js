// basic
import {projects, projectsUA} from '../../db/db';


// components
import Title from "../../components/title/title";

// styles



const Projects = (props) => {

    const obj = props.language === 0? projects : projectsUA;
    const activeTheme = +props.theme === 1? `_1` : +props.theme === 2? `_2` : '';


    return (
        <div className="projects">
            <div className="container">
            <Title text={obj.title} theme={props.theme}/>
            </div>
        </div>
    )
}

export default Projects;