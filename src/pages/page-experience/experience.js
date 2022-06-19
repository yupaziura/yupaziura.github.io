// basic

// conponents
import Title from "../../components/title/title";

// styles
import './experience.scss';

const Experience = () => {
    return ( 
        <>
            <div className="container">
                <Title text={'Experience'} />

                <div className="experience">
                <div className="experience__item experience__item_1"></div>
                <div className="experience__item experience__item_2"></div>
                <div className="experience__item experience__item_3"></div>
                <div className="experience__item experience__item_4"></div>
                <div className="experience__item experience__item_5"></div>
                <div className="experience__item experience__item_6"></div>
                <div className="experience__item experience__item_7"></div>
                <div className="experience__item experience__item_8"></div>
                </div>
            </div>
        </>
    )
}

export default Experience;
