// basic
import {projects, projectsUA} from '../../db/db';
import { Link } from 'react-router-dom';


// components
import Title from "../../components/title/title";
import TextArea from '../../components/text-area/text-area';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// styles
import './projects.scss';



const Projects = (props) => {

    const obj = props.language === 0? projects : projectsUA;
    const activeTheme = +props.theme === 1? `_1` : +props.theme === 2? `_2` : '';

    const elem = obj.projects.map(({title, Icon, path}, i) => {
        return (
            <Link to={path} className={'projects__links'}>
                <TextArea key={i} theme={props.theme}>
                    <div className="projects__headerblock">
                        <Icon className={'projects__icons'}/>
                        <h3>{title}</h3>
                    </div>
                    
                        <ArrowRightAltIcon sx={{display: 'block'}} />
                </TextArea>
            </Link>
        )
    })


    return (
        <div className={`projects projects${activeTheme}`} id='projects'>
            <div className="container">
                <Title text={obj.title} theme={props.theme}/>
                <div className="projects__box">
                    {elem}
                </div>
            </div>
        </div>
    )
}

export default Projects;