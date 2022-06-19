// basic
import {React} from 'react';
import {main, mainUA} from '../../db/db';

// components
import Nav from "../../components/nav/nav";

// styles
import './main-page.scss';


const MainPage = (props) => {
    const obj = props.language === 0? main : mainUA;
    

    return (
        <div className="main">
            <Nav language={props.language} setLanguage={props.setLanguage}/>
            <div className="main__content">
                
                <div className="main__photo">
                    <img src="" alt="" />
                </div>

                <div className="main__headers">
                    <div><h1 className="main__headers_h1">{obj.title}</h1></div>
                    <div><h2 className="main__headers_h2">{obj.subtitle}</h2></div>
                </div>

            </div>
        </div>
    )
}

export default MainPage;