// basic
import {aboutMe, aboutMeUA} from '../../db/db';

// components
import Title from '../../components/title/title';
import TextArea from '../../components/text-area/text-area';

// styles
import './about-me.scss';

const AboutMe = (props) => {
    const obj = props.language === 0? aboutMe : aboutMeUA;

    const elem = obj.text.map((item, i) => {
        return (
            <div key={i}>
                {item}
            </div>
        )
    })


    return (
        <div className="about_me" id='about_me'>
            <div className="container">
                <Title text={obj.title}/>
                <div className="about_me__block">
                    <TextArea>
                        <div className="">
                            {elem}
                        </div>
                    </TextArea>

                    <div className="about_me__photo">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;