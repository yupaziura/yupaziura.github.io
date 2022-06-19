// basic
import {React} from 'react';
import {main, mainUA} from '../../db/db';

// components

// styles
import './nav.scss';

const Nav = (props) => {
    
    const obj = props.language === 0? main : mainUA;

    return (
        <>
            <nav className="nav">
                <div className="nav__linkblock">
                    <a className="nav__link" href="#about_me">{obj.nav[0]}</a> 
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#studies">{obj.nav[1]}</a> 
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#experience">{obj.nav[2]}</a>
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#skills">{obj.nav[3]}</a>
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#footer">{obj.nav[4]}</a>
                </div>

                <button onClick={()=>props.setLanguage(1)} className="nav__linkblock nav__linkblock_language">
                🇺🇦
                </button>
                <button onClick={()=>props.setLanguage(0)} className="nav__linkblock nav__linkblock_language">
                🇬🇧
                </button>
            </nav>
        </>
    )
}

export default Nav;