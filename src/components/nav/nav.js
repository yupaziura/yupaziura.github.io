// basic

// components

// styles
import './nav.scss';

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav__linkblock">
                    <a className="nav__link" href="#about_me">About me</a> 
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#studies">Studies and courses</a> 
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#experience">Experience</a>
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#skills">Skills</a>
                </div>
                <div className="nav__linkblock">
                    <a className="nav__link" href="#footer">Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Nav;