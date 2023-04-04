import { projectDes, projectDesUA } from '../../db/db';

import TextArea from '../../components/text-area/text-area';
import Title from '../../components/title/title';

import  './project-design.scss';

const ProjectsDesign = (props) => {
    const obj = props.language === 0? projectDes : projectDesUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';

    const elem = obj.projects.map((item, i) => {
        return (
            <TextArea theme={props.theme}  key={item.id}>
                <div className='design'>
                        <h3 className='design__title'>{item.name}</h3>
                    
                        <p className='design__descr'>{item.descr}</p>
    
                        <div className='design__frame'>
                            <iframe title={item.id} style={{width: '100%', height: '300px'}} src={item.link} frameborder="0"></iframe>
                        </div>
                </div>
            </TextArea>
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

export default ProjectsDesign