// basic
import {skills, skillsUA} from '../../db/db';

// conponents
import Title from "../../components/title/title";
import Card from "../../components/card/card";

// styles
import './skills.scss';

const Skills = (props) => {
    const obj = props.language === 0? skills : skillsUA;

    const cards = obj.skills.map((item, i) => {
        return (
            <Card key={i} header={item.title} text={item.text}/>  
        )
    })
    return (
        <div id='skills'>
            <Title text={obj.title}/>
            <div className="container">
                <div className="skills">
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default Skills;