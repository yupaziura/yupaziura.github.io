// basic

// conponents
import Title from "../../components/title/title";
import Card from "../../components/card/card";

// styles
import './skills.scss';

const Skills = () => {
    return (
        <>
            <Title text={'Skills'}/>
            <div className="container">
                <div className="skills">
                    <Card header='JavaScript' text='Work with Javascript more than 1 year'/>
                    <Card header='JavaScript' text='Work with Javascript more than 1 year'/>
                    <Card header='JavaScript' text='Work with Javascript more than 1 year'/>
                    <Card header='JavaScript' text='Work with Javascript more than 1 year'/>
                    <Card header='JavaScript' text='Work with Javascript more than 1 year'/>
                    <Card header='JavaScript' text='Work with Javascript more than 1 year'/>
                    <Card header='JavaScript' text='Work with Javascript more than 1 year'/>
                </div>
            </div>
        </>
    )
}

export default Skills;