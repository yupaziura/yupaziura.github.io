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
    
                        <div className='design__frame' style={{display: 'flex', gap: '10px'}}>
                            <div className="" style={{width: 'clamp(290px, 100%, 1000px)', height: '510px'}}>
                                <iframe title={item.id} width='100%' height='100%'  src={item.link} frameborder="0"></iframe>
                            </div>
                            {
                                item.proto?
                                    <div className="" style={{width: 'clamp(290px, 30%, 450px)', height: '510px'}}>
                                        <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}  width='100%' height='100%'  title={item.id}  src={item.proto} frameborder="0"></iframe>
                                    </div>
                                    :
                                    null
                            }
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