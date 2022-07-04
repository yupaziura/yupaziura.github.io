// basic
import {React} from 'react';
import {main, mainUA} from '../../db/db';
// import {Link} from 'react-route-dom';
import { Link } from 'react-router-dom';


// components
import Nav from "../../components/nav/nav";

// styles
import './main-page.scss';


const MainPage = (props) => {
    const obj = props.language === 0? main : mainUA;
    const activeTheme = props.theme === 1? `_1` : props.theme === 2? `_2` : '';


    return (
        <div className={`main main${activeTheme}`}>
            <div className="container">
                    <div className="main__container">
                    <div className="main__photo">
                        <img className='avatar' src={require('../../img/avatar.jpg')} alt="" />
                    </div>

                    <div className="main__headers">
                        <div><h1 className="main__headers_h1">{obj.title}</h1></div>
                        <div><h2 className="main__headers_h2">{obj.subtitle}</h2></div>
                    </div>
                </div>
                <Link to={{ pathname: "/word/index.html" }} target="_blank">click</Link>
            </div>
        </div>
    )
}

export default MainPage;