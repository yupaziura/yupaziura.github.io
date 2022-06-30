// basic
import {projectWeb, projectWebUA} from '../../db/db';

// conponents
import Title from '../../components/title/title';
import TextArea from '../../components/text-area/text-area';

// styles
import './project-web.scss';


const ProjectWeb = (props) => {
    const obj = props.language === 0? projectWeb : projectWebUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';

    const elem = obj.arr.map((item, i) => {
        return (
            <div className='web__item' key={i}>
                <TextArea>
                    <img className='web__img' src={item.path} alt='' />
                </TextArea>
                <div className="web__text">
                    <h3>{item.title}</h3>
                    <p>{item.descr}</p>
                </div>
            </div>
        )
    })

    return (
        <div className={`web web${activeTheme}`}>
            <div className="container">
                <Title theme={props.theme} text={obj.title}/>
                {elem}
            </div>
        </div>
    )
}

export default ProjectWeb;