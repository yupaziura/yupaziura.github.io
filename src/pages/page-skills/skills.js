// basic
import {skills, skillsUA} from '../../db/db';

// conponents
import Title from "../../components/title/title";
import Card from "../../components/card/card";

// styles
import './skills.scss';

const Skills = (props) => {
    const obj = props.language === 0? skills : skillsUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';


    const cards = obj.skills.map(({rate, title, text, Image}, i) => {
        return (
            <Card rate={rate} key={i}  header={title} text={text} theme={props.theme}>
                <span><Image className='skills__icons'/></span>
            </Card>  
        )
    })
    return (
        <div id='skills' className={`skills skills${activeTheme}`}>
            <div className="container">
            <Title text={obj.title} theme={props.theme}/>
            
                <div className="skills">
                    {cards}
               
            </div>
            </div>
        </div>
    )
}

export default Skills;