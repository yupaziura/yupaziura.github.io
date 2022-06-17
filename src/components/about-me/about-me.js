// basic

// components
import Title from '../title/title';
import TextArea from '../text-area/text-area';

// styles
import './about-me.scss';

const AboutMe = () => {
    return (
        <>
            <div className="about_me">
                <Title text='About me'/>
                <div className="about_me__block">
                    <TextArea>
                        <div className="">
                            Lorem ipsum, dolor sit amet consectetur 
                            adipisicing elit. Atque sunt delectus magnam quos, 
                            fugiat qui odit accusamus possimus alias enim
                            dolores, quod nostrum rem ab quasi at vel dolore 
                            debitis.
                            Lorem ipsum, dolor sit amet consectetur 
                            adipisicing elit. Atque sunt delectus magnam quos, 
                            fugiat qui odit accusamus possimus alias enim
                            dolores, quod nostrum rem ab quasi at vel dolore 
                            debitis.
                        </div>
                    </TextArea>

                    <div className="about_me__photo">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;