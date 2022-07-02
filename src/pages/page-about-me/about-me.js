// basic
import {aboutMe, aboutMeUA} from '../../db/db';

// components
import Title from '../../components/title/title';
import TextArea from '../../components/text-area/text-area';

// styles
import './about-me.scss';

const AboutMe = (props) => {
    const obj = props.language === 0? aboutMe : aboutMeUA;
    const activeTheme = +props.theme === 1? `_1` : +props.theme === 2? `_2` : '';


    const elem = obj.text.map((item, i) => {
        return (
            <div key={i}>
                {item}
            </div>
        )
    })


    return (
        <div className={`about_me about_me${activeTheme}`} id='about_me'>
            <div className="container">
                <Title text={obj.title} theme={props.theme}/>
                <div className="about_me__block">
                    <TextArea theme={props.theme}>
                        <div className="">
                            {elem}
                        </div>
                    </TextArea>

                    <div className="about_me__photo">
                        <img className='avatarBig' src={require('../../img/avatar-big.jpg')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;